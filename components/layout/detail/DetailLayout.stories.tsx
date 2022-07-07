import { ComponentMeta, ComponentStory } from '@storybook/react';
import DetailLayout from './DetailLayout';
import { mockDetailLayoutProps } from './DetailLayout.mocks';
import { DetailLayoutProps } from './DetailLayoutProps';

export default {
  title: 'layout/DetailLayout',
  component: DetailLayout,
  argTypes: {},
} as ComponentMeta<typeof DetailLayout>;

const Template: ComponentStory<typeof DetailLayout> = (args) => (
  <DetailLayout {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockDetailLayoutProps.base,
} as DetailLayoutProps;
