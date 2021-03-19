import React from 'react';
import { MessageText } from './MessageText';
import { Message } from './types/chat/Messages';

type Props = {
  messages: Message[];
};

export const MessagesList = ({ messages }: Props) => {
  const messageLength = messages.length;
  return (
    <div className="flow-root">
      <ul className="-mb-8">
        {messages.map((message: Message, i: number) => {
          const { id, name, profilePic, dateStamp, message: msg } = message;
          if (i === messageLength - 1) {
            return (
              <MessageText
                key={message.id}
                id={id}
                name={name}
                profilePic={profilePic}
                dateStamp={dateStamp}
                message={msg}
              />
            );
          } else {
            return (
              <MessageText
                key={message.id}
                id={id}
                name={name}
                profilePic={profilePic}
                dateStamp={dateStamp}
                message={msg}
                hasMoreLinkedMessages={true}
              />
            );
          }
        })}
      </ul>
    </div>
  );
};
