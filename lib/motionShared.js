// Add staggering effect to the children of the container
export const letterContainerVariants = {
  before: {},
  after: { transition: { staggerChildren: 0.08 } }
};

// Variants for animating each letter
export const letterVariants = {
  before: {
    opacity: 0,
    y: 20,
    transition: {
      type: 'spring',
      damping: 16,
      stiffness: 200
    }
  },
  after: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 16,
      stiffness: 200
    }
  }
};
