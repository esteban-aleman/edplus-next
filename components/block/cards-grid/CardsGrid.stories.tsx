import { ComponentMeta, ComponentStory } from '@storybook/react';
import CardsGrid from './CardsGrid';
import { mockCardsGridProps } from './CardsGrid.mocks';
import { CardsGridProps } from './CardsGridProps';

export default {
  title: 'block/CardsGrid',
  component: CardsGrid,
  argTypes: {},
} as ComponentMeta<typeof CardsGrid>;

const Template: ComponentStory<typeof CardsGrid> = (args) => (
  <CardsGrid {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockCardsGridProps.base,
} as CardsGridProps;
