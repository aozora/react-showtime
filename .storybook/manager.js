import { addons } from '@storybook/addons';
// import { themes } from "@storybook/theming"; // premade themes, you can try dark
import showTimeStorybook from './themes/showTimeStorybook';

addons.setConfig({
  theme: showTimeStorybook
});
