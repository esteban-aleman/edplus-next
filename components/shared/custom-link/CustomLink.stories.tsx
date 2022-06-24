import { ComponentMeta, ComponentStory } from '@storybook/react';
import CustomLink from './CustomLink';
import { mockCustomLinkProps } from './CustomLink.mocks';
import { CustomLinkProps } from './CustomLinkProps';

export default {
  title: 'shared/CustomLink',
  component: CustomLink,
  argTypes: {},
} as ComponentMeta<typeof CustomLink>;

const Template: ComponentStory<typeof CustomLink> = (args) => (
  <CustomLink {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockCustomLinkProps.base,
} as CustomLinkProps;
