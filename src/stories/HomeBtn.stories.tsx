import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HomeBtn } from '../components/header-components/HomeBtn';

export default {
  title: 'Components/HomeButton',
  component: HomeBtn,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof HomeBtn>;

const Template: ComponentStory<typeof HomeBtn> = (args) => <HomeBtn {...args} />;

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
