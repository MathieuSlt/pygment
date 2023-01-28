import React, { useRef, useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';

const Login = () => {


    return (
        <div>
            <Navigation />
            {/* <LoginForm /> */}
            <SignUpForm />
        </div>
    );
}

export default Login;


