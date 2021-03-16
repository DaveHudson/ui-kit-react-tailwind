import React from 'react';
import { Message } from './types/chat/Messages';

type messageProps = {
  message: Message
}

export const MessageText = ({message}: messageProps) => {
  const { id, name, profilePic, dateStamp, message: msg } = message;
  return (
    <li key={id}>
      <div className="relative pb-8">
        <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
        <div className="relative flex items-start space-x-3">
          <div className="relative">
            <img className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white" src={profilePic} alt="" />
            <span className="absolute -bottom-0.5 -right-1 bg-white rounded-tl px-0.5 py-px">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <div>
              <div className="text-sm">
                <a href="#" className="font-medium text-gray-900">{name}</a>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Commented {dateStamp}
              </p>
            </div>
            <div className="mt-2 text-sm text-gray-700">
              <p>
                {msg}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}