import React from 'react'

import { Avatar } from '@mui/material'

import "./ChatMessage.scss"

export const ChatMessage = () => {
  return (
    <div className='message'>
        <Avatar />
        <div className="message__info">
            <h4>
                Shin Code
                <span className='message__timestamp'>2024/4/14</span>
            </h4>
            <p>メッセージ本文</p>
        </div>
    </div>
  )
}
