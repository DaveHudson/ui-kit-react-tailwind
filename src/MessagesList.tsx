import React from 'react';
import { MessageText } from './MessageText';
import { Message } from './types/chat/Messages';

export const MessagesList = (messages: Message[]) => {  
  return (
    <div className="flow-root">
      <ul className="-mb-8">
        {
          Object.values(messages).map((message: Message) => {
            return <MessageText {...message} />            
          })
        }
      </ul>
    </div>
  )
}