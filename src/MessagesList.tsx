import React from 'react';
import { MessageText } from './MessageText';

type messagesProps = {
  messages: Message[];
};

export const MessagesList = ({ messages }: messagesProps) => {
  return (
    <div className="flow-root">
      <ul className="-mb-8">
        {messages.map((message: Message) => {
          return <MessageText message={message} key={message.id} />;
        })}
      </ul>
    </div>
  );
};
