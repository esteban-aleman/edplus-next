import { ComponentMeta, ComponentStory } from '@storybook/react';
import MainLayout from './MainLayout';
import { mockMainLayoutProps } from './MainLayout.mocks';
import { MainLayoutProps } from './MainLayoutProps';

export default {
  title: 'layout/MainLayout',
  component: MainLayout,
  argTypes: {},
} as ComponentMeta<typeof MainLayout>;

const Template: ComponentStory<typeof MainLayout> = (args) => (
  <MainLayout {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockMainLayoutProps.base,
} as MainLayoutProps;
