import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import axios from 'axios'
import { useState } from 'react'

const signUpData = (username, mobile, email, password) => {
    const data = {username, mobile, email, password}
    console.log(data)
    

    axios.post("http://localhost:3001/signup", data).then(() => {
        console.log("sucessfull send the data")
    }).catch(() => {
        console.log("Something went wrong. Plase try again later");
    });
}

function Signup() {
    const [username, setUserName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <>
        <Navbar />
        <div className="container w-50 bg-light border border-dark rounded mt-5"> 
            <h1 className="display-5 text-center text-danger mt-2">Signup</h1>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" 
                    value={username}
                    onInput={e => setUserName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Mobile</label>
                    <input type="tel" className="form-control" aria-describedby="emailHelp" 
                    value={mobile}
                    onInput={e => setMobile(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control"  aria-describedby="emailHelp" 
                    value={email}
                    onInput={e => setEmail(e.target.value)}
                    />
                    <div className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control"  
                    value={password}
                    onInput={e => setPassword(e.target.value)}
                    />
                </div>
                <button type="button" className="btn btn-primary"
                onClick={()=>signUpData(username, mobile, email, password)}
                >Signup</button>
            </form>
                <div className="text-center mt-3"><Link to={"/login"}>Already User, Login Now!</Link></div>

        </div>
        </>
    )
}

export default Signup
