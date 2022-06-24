import { ComponentMeta, ComponentStory } from '@storybook/react';
import Footer from './Footer';
import { mockFooterProps } from './Footer.mocks';
import { FooterProps } from './FooterProps';

export default {
  title: 'layout/Footer',
  component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockFooterProps,
} as FooterProps;
