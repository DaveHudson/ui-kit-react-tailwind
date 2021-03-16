import React from 'react';
import { Meta, Story } from '@storybook/react';
import { MessageText } from '../src';

const meta: Meta = {
  title: 'MessageText',
  component: MessageText,
};

export default meta;

const message = {
  id: '1',
  name: 'Eduardo Benz',
  profilePic: 'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=256&amp;h=256&amp;q=80',
  dateStamp: '6 days ago',
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam.'
}
const Template: Story = (args) => <MessageText message={message} {...args} />;

export const SCMessageText = Template.bind({});
SCMessageText.args = {};

