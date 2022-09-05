import { ComponentMeta, ComponentStory } from '@storybook/react';
import Home from './Home';
import { mockHomeProps } from './Home.mocks';
import { HomeProps } from './HomeProps';

export default {
  title: 'layout/Home',
  component: Home,
  argTypes: {},
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockHomeProps.base,
} as HomeProps;
