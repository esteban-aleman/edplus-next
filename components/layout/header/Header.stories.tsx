import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header from './Header';
import { mockHeaderProps } from './Header.mocks';
import { HeaderProps } from './HeaderProps';

export default {
  title: 'layout/Header',
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <Header {...(args as HeaderProps)} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockHeaderProps.base,
} as HeaderProps;
