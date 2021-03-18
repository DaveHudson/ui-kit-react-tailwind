import React from 'react';
import { MessagesList } from './MessagesList';

export const ChatContainer = () => {
  const messages = [
    {
      id: '1',
      name: 'Eduardo Benz',
      profilePic:
        'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=256&amp;h=256&amp;q=80',
      dateStamp: '6 days ago',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam.',
    },
    {
      id: '2',
      name: 'Jason Meyers',
      profilePic:
        'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
      dateStamp: '2h ago',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.',
    },
  ] as Message[];

  return (
    <div className="max-w-lg mx-auto px-6">
      <MessagesList messages={messages} />
    </div>
  );
};
