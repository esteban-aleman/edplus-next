import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextWithMediaCarousel from './TextWithMediaCarousel';
import { mockTextWithMediaCarouselProps } from './TextWithMediaCarousel.mocks';
import { TextWithMediaCarouselProps } from './TextWithMediaCarouselProps';

export default {
  title: 'block/TextWithMediaCarousel',
  component: TextWithMediaCarousel,
  argTypes: {},
} as ComponentMeta<typeof TextWithMediaCarousel>;

const Template: ComponentStory<typeof TextWithMediaCarousel> = (args) => (
  <TextWithMediaCarousel {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockTextWithMediaCarouselProps.base,
} as TextWithMediaCarouselProps;
