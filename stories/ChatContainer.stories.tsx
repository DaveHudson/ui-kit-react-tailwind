import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ChatContainer } from '../src';

const meta: Meta = {
  title: 'ChatContainer',
  component: ChatContainer,
};

export default meta;

const Template: Story = (args) => <ChatContainer {...args} />;

export const SCChatContainer = Template.bind({});
SCChatContainer.args = {  };

