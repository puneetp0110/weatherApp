import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SelectCity from './SelectCity';
import WeatherDisplay from './WeatherDisplay';
import Login from './Login';

const App = () => (
    <Router>
        {/* Create a list of cities that we want to display on
        dropdown and pass them as props to SelecCity component and render*/}
        <div className="App">
            {/* <SelectCity cityList={[{ label: 'Milwaukee', value: 'A0' },
                { label: 'Chicago', value: 'B0' },
                { label: 'Minneapolis', value: 'C0' },
                { label: 'Dallas', value: 'D0' }]} /> */}
            <Route path ="/Login" component={Login}></Route>
            {/* <Route path ="/WeatherDisplay" component={WeatherDisplay}></Route> */}
        </div>
    </Router>
);

export default App;

// import React, { useState } from 'react'
import { GoogleLogout, GoogleLogin } from 'react-google-login'
// import GoogleLogin, { GoogleLogout } from '../dist/google-login'
// import FontAwesome from 'react-fontawesome';

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

const logout = () => {
  console.log('logout') // eslint-disable-line
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
        Auth then Hide button
      </GoogleLogin>
    )
  }

  return <button onClick={() => toggleShow(true)}>show button</button>
}

export const Mount = () => (
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
      <span>Analytics</span>
    </GoogleLogin>
    <br />
    <br />
    <GoogleLogin
      clientId={clientId}
      scope="https://www.googleapis.com/auth/adwords"
      onSuccess={success}
      onFailure={error}
      onRequest={loading}
      approvalPrompt="force"
      responseType="code"
      // uxMode="redirect"
      // redirectUri="http://google.com"
      // disabled
      // prompt="consent"
      // className='button'
      // style={{ color: 'red' }}
    >
      <span>Adwords</span>
    </GoogleLogin>
    <br />
    <br />
    <GoogleLogin onSuccess={success} onFailure={error} clientId={clientId} />
    <br />
    <br />
    <GoogleLogin theme="dark" onSuccess={success} onFailure={error} clientId={clientId} />
    <br />
    <br />
    <GoogleLogin theme="dark" style={{ background: 'blue' }} onSuccess={success} onFailure={error} clientId={clientId} />
    <br />
    <br />
    <GoogleLogout buttonText="Logout" onLogoutSuccess={logout} />
  </div>
)
