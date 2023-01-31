import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
    const history = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/signup', {
                email, password
            }).then(res => {
                if (res.data === "exist") {
                    alert("User already exist");
                    console.log("exist")

                } else if (res.data === "notexist") {
                    history('/', { state: { id: email } });
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
        <div className='signup'>

            <h1>Signup</h1>
            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <input type="submit" onClick={submit} />
            </form>
            <br />
            <p>OR</p>
            <br />
            <Link to="/login">Already have account ?</Link>
        </div>
    );
};

export default Signup;