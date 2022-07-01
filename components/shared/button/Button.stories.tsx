import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';
import { mockButtonProps } from './Button.mocks';
import { ButtonProps } from './ButtonProps';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ...mockButtonProps.primary,
} as ButtonProps;

export const Secondary = Template.bind({});
Secondary.parameters = {
  backgrounds: { default: 'dark' },
};
Secondary.args = {
  ...mockButtonProps.secondary,
} as ButtonProps;
