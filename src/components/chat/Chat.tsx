import React from 'react'
import { ChatHeader } from './ChatHeader'

import "./Chat.scss"

export const Chat = () => {
  return (
    <div className='chat'>
      {/* chatHeader */}
      <ChatHeader />
      {/* chatMessage */}
      <div className="chat__message"></div>
      {/* chatInput */}
      <div className="chat__input"></div>
    </div>
  )
}
