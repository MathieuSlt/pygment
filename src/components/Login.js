import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const history = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/', {
                email, password
            }).then(res => {
                if (res.data === "exist") {
                    history('/', { state: { id: email } });
                    console.log("exist")

                } else if (res.data === "notexist") {
                    alert("Email or password is incorrect");
                    console.log("notexist")
                }
            }).catch(error => {
                console.log(error);
            });

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='login'>

            <h1>Login</h1>
            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <input type="submit" onClick={submit} />
            </form>
            <br />
            <p>OR</p>
            <br />
            <Link to="/signup" style={{ color: 'black', fontWeight: 'bold', fontSize: 'larger' }}>Sign up</Link>
        </div>
    );
};

export default Login;