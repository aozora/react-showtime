import React from 'react';
import { useOverlay, useModal, DismissButton } from '@react-aria/overlays';
import { useDialog } from '@react-aria/dialog';
import { FocusScope } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import styles from './MiniSearch.module.scss';

const MiniSearchResults = React.forwardRef(({ children, isOpen, onClose, ...otherProps }, ref) => {
  // Handle interacting outside the dialog and pressing
  // the Escape key to close the modal.
  const { overlayProps } = useOverlay(
    {
      onClose,
      isOpen,
      isDismissable: true
    },
    ref
  );

  // Hide content outside the modal from screen readers.
  const { modalProps } = useModal();

  // Get props for the dialog and its title
  const { dialogProps } = useDialog({}, ref);

  return (
    <FocusScope restoreFocus>
      <div
        {...mergeProps(overlayProps, dialogProps, otherProps, modalProps)}
        ref={ref}
        className={styles.miniSearchResults}
      >
        {children}
        <DismissButton onDismiss={onClose} />
      </div>
    </FocusScope>
  );
});

export default MiniSearchResults;
