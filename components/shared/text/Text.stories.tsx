import { ComponentMeta, ComponentStory } from '@storybook/react';
import Text from './Text';
import { mockTextProps } from './Text.mocks';
import { TextProps } from './TextProps';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    tag: {
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockTextProps.base,
} as TextProps;
