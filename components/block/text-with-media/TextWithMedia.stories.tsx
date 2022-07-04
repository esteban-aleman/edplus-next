import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextWithMedia from './TextWithMedia';
import { mockTextWithMediaProps } from './TextWithMedia.mocks';
import { TextWithMediaProps } from './TextWithMediaProps';

export default {
  title: 'block/TextWithMedia',
  component: TextWithMedia,
  argTypes: {},
} as ComponentMeta<typeof TextWithMedia>;

const Template: ComponentStory<typeof TextWithMedia> = (args) => (
  <TextWithMedia {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockTextWithMediaProps.base,
} as TextWithMediaProps;

export const WithChildren = Template.bind({});

WithChildren.args = {
  ...mockTextWithMediaProps.withChildren,
} as TextWithMediaProps;
