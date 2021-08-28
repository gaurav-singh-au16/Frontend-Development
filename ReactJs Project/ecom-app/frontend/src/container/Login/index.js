import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function Login() {
    const History = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const Login = async(email, password) => {
        console.log(email, password)
        let res = await axios.post("http://localhost:3001/login", {
            email,
            password
        })

        console.log(res.data.name)
        History.push('/cart')
        
        
    }

    return (
        <>
            <Navbar />
            <div className='container border border-dark bg-light mt-5 w-50'>
            <form>
                <div className="mb-3 mt-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" 
                    value={email}
                    onInput={e=>setEmail(e.target.value)}
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" 
                    value={password}
                    onInput={e=>setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label">Check me out</label>
                </div>
                <button type="button" className="btn btn-primary my-3"
                onClick={()=>Login(email,password)}
                >Submit</button>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Login
