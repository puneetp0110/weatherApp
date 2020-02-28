import React, { useState } from 'react'
import { GoogleLogout, GoogleLogin } from 'react-google-login'
//import FontAwesome from 'react-fontawesome';

const clientId = '617246850621-95f9qhmehd380g2df86pjhrqc84n8nij.apps.googleusercontent.com'

const success = response => {
  console.log(response) // eslint-disable-line
}

const error = response => {
  console.error(response) // eslint-disable-line
}

const loading = () => {
  console.log('loading') // eslint-disable-line
}

const MountTest = () => {
  const [showButton, toggleShow] = useState(true)

  if (showButton) {
    return (
      <GoogleLogin
        onSuccess={res => {
          toggleShow(false)
          success(res)
        }}
        onFailure={error}
        clientId={clientId}
      >
        Hide Button After Auth
      </GoogleLogin>
    )
  }

  return <button onClick={() => toggleShow(true)}>show button</button>
}

export default () => (
  <div>
    <MountTest />
    <br />
    <br />
    <GoogleLogin
      clientId={clientId}
      scope="https://www.googleapis.com/auth/analytics"
      onSuccess={success}
      onFailure={error}
      onRequest={loading}
      offline={false}
      approvalPrompt="force"
      responseType="id_token"
      isSignedIn
      theme="dark"
      // disabled
      // prompt="consent"
      // className='button'
      // style={{ color: 'red' }}
    >
      <span>Login With Gmail</span>
    </GoogleLogin>
  </div>
)
