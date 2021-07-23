import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import axios from 'axios'



const loginData = (email, password) => {
    const data = {email, password}
    console.log(data)
    

    axios.post("http://localhost:3001/login", data).then(resp => {
        
        console.log(resp)
        
        // history.push('/calendar')
    }).catch(() => {
        console.log("Something went wrong. Plase try again later");
    });
}

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
        <Navbar />
        <div className="container w-50 bg-light bg-light border border-dark rounded mt-5">
            <h1 className="display-5 text-center text-danger mt-2">Login</h1>
            <form>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                    value = {email}
                    onInput={e => setEmail(e.target.value)}
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" 
                    value = {password}
                    onInput={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label">Remember Me</label>
                </div>
                <button type="button" className="btn btn-primary"
                onClick={()=>loginData(email, password)}
                >Login</button>
            </form>
                <div className="text-center mt-3"><Link to={"/signup"}>Not Registered Yet! Signup</Link></div>
        </div>
        </>
    )
}

export default Login
