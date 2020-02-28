
import React, { useState } from 'react';
import { GoogleLogout, GoogleLogin } from 'react-google-login';
// import GoogleLogin, { GoogleLogout } from '../dist/google-login'
// import FontAwesome from 'react-fontawesome';

const clientId = '143791565531-bi6nbv001sqq9itv6uudo3a88h1llv6p.apps.googleusercontent.com';

const success = response => {
  console.log(response) // eslint-disable-line
};

const error = response => {
  console.error(response) // eslint-disable-line
};

const loading = () => {
  console.log('loading') // eslint-disable-line
};

const logout = () => {
  console.log('logout') // eslint-disable-line
};

const MountTest = () => {
    const [showButton, toggleShow] = useState(true);

    if (showButton) {
        return (
            <GoogleLogin
                onSuccess={res => {
                    toggleShow(false);
                    success(res);
                }}
                onFailure={error}
                clientId={clientId}
            >
        Auth then Hide button
            </GoogleLogin>
        );
    }

    return <button onClick={() => toggleShow(true)}>show button</button>;
};
const onClick = () => {
    // ApI to validate if token is valid
};

export default () => (
    <div>
        {/* <MountTest /> */}
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
        <input id="RSAToken" type="text" name = "Token"></input>
        <button onClick={this.onsubmit}></button>
    </div>
);