import { ComponentMeta, ComponentStory } from '@storybook/react';
import DetailsList from './DetailsList';
import { mockDetailsListProps } from './DetailsList.mocks';
import { DetailsListProps } from './DetailsListProps';

export default {
  title: 'block/DetailsList',
  component: DetailsList,
  argTypes: {},
} as ComponentMeta<typeof DetailsList>;

const Template: ComponentStory<typeof DetailsList> = (args) => (
  <DetailsList {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockDetailsListProps.base,
} as DetailsListProps;
