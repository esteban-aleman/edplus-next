import { ComponentMeta, ComponentStory } from '@storybook/react';
import Title from './Title';
import { mockTitleProps } from './Title.mocks';
import { TitleProps } from './TitleProps';

export default {
  title: 'shared/Title',
  component: Title,
  argTypes: {},
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const H1 = Template.bind({});
H1.args = {
  ...mockTitleProps.h1,
} as TitleProps;

export const H3 = Template.bind({});
H3.args = {
  ...mockTitleProps.h3,
} as TitleProps;

export const H4 = Template.bind({});
H4.args = {
  ...mockTitleProps.h4,
} as TitleProps;

export const H5 = Template.bind({});
H5.args = {
  ...mockTitleProps.h5,
} as TitleProps;
