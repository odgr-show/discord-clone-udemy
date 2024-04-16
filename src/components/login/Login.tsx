import React from 'react'

import "./Login.scss"
import { Button } from '@mui/material'

function Login() {
  return (
    <div className='login'>
        <div className="login__logo">
            <img src="public/NCG253-scaled.jpg" alt="" />
        </div>
        
        <Button>ログイン</Button>
    </div>

  )
}

export default Login