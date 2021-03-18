import React from 'react';
import { MessageText } from './MessageText';
import { Message } from './types/chat/Messages';

type Props = {
  messages: Message[];
};

export const MessagesList = ({ messages }: Props) => {
  return (
    <div className="flow-root">
      <ul className="-mb-8">
        {messages.map((message: Message) => {
          const { id, name, profilePic, dateStamp, message: msg } = message;
          return (
            <MessageText
              id={id}
              name={name}
              profilePic={profilePic}
              dateStamp={dateStamp}
              message={msg}
              key={message.id}
            />
          );
        })}
      </ul>
    </div>
  );
};
