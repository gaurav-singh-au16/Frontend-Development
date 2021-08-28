import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Listings from './Listings'

function Login() {
    return (
        <>
            <Navbar />
            <div>
                <h1 className="text-center mt-5">Products page</h1>
            </div>
            <Listings />
            <Footer />
        </>
    )
}

export default Login
