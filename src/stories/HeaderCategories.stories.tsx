import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useSelector } from 'react-redux';
import { Categories } from '../components/header-components/Categories';

export default {
  title: 'Components/Categories',
  component: Categories,
} as ComponentMeta<typeof Categories>;

// const notesActiveList = useSelector((state: AppState) => state.notesActiveList);
// const notesArchivedList = useSelector((state: AppState) => state.notesArchivedList);


const Template: ComponentStory<typeof Categories> = (args) => <Categories {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    // size: 'medium',
};

// export const Large = Template.bind({});
// Large.args = {
//     size: 'large',
// };

// export const Small = Template.bind({});
// Small.args = {
//     size: 'small',
// };
