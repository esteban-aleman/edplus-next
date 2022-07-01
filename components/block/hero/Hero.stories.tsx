import { ComponentMeta, ComponentStory } from '@storybook/react';
import Hero from './Hero';
import { mockHeroProps } from './Hero.mocks';
import { HeroProps } from './HeroProps';

export default {
  title: 'block/Hero',
  component: Hero,
  argTypes: {},
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockHeroProps.base,
} as HeroProps;
