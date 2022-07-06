import { ComponentMeta, ComponentStory } from '@storybook/react';
import Timeline from './Timeline';
import { mockTimelineProps } from './Timeline.mocks';
import { TimelineProps } from './TimelineProps';

export default {
  title: 'block/Timeline',
  component: Timeline,
  argTypes: {},
} as ComponentMeta<typeof Timeline>;

const Template: ComponentStory<typeof Timeline> = (args) => (
  <Timeline {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockTimelineProps.base,
} as TimelineProps;
