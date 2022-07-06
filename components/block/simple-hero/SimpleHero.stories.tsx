import { ComponentMeta, ComponentStory } from '@storybook/react';
import SimpleHero from './SimpleHero';
import { mockSimpleHeroProps } from './SimpleHero.mocks';
import { SimpleHeroProps } from './SimpleHeroProps';

export default {
  title: 'block/SimpleHero',
  component: SimpleHero,
  argTypes: {},
} as ComponentMeta<typeof SimpleHero>;

const Template: ComponentStory<typeof SimpleHero> = (args) => (
  <SimpleHero {...args} />
);

export const Base = Template.bind({});
Base.args = {
  ...mockSimpleHeroProps.base,
} as SimpleHeroProps;

export const Light = Template.bind({});
Light.args = {
  ...mockSimpleHeroProps.light,
} as SimpleHeroProps;

export const WithChildren = Template.bind({});
WithChildren.args = {
  ...mockSimpleHeroProps.withChildren,
} as SimpleHeroProps;
