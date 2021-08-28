import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function Login() {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const History = useHistory()

    const Register = async(name, email, password) => {
        console.log(name, email, password)
        let res = await axios.post('http://localhost:3001/signup', {
            name, 
            email, 
            password
          })
        
        if (res.status === 400){
            console.log("Some Error")
            window.alert('Some error')
        }else{
            console.log('Sucessfully Register')
            window.alert("Sucessfull")
            History.push('/login')
        }
    }
    

    return (
        <>
            <Navbar />
            <div className='container w-50 border border-dark bg-light mt-5'>
            <form>
                <div className="mb-3 mt-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp"
                    value={name}
                    onInput={e=>setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
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
                <button type="button" className="btn btn-primary my-3"
                onClick={()=>Register(name, email, password)}
                >Submit</button>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Login
