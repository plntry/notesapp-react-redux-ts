import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OpenCreateFormBtn } from '../components/header-components/OpenCreateFormBtn';

export default {
  title: 'Components/Open Create Form Button',
  component: OpenCreateFormBtn,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof OpenCreateFormBtn>;

const Template: ComponentStory<typeof OpenCreateFormBtn> = (args) => <OpenCreateFormBtn {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
};
