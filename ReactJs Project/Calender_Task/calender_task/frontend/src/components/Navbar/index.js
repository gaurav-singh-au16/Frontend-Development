import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <Link to={"/"} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <svg className="bi me-2" width="40" height="32"></svg>
                    <span className="fs-4">Calendar App</span>
                </Link>

                <ul className="nav nav-pills">
                    <li className="nav-item"><Link to={"/"} className="nav-link active" aria-current="page">Home</Link></li>
                    <li className="nav-item"><Link to={"/calendar"} className="nav-link">Calendar</Link></li>
                    <li className="nav-item"><Link to={"/signup"} className="nav-link">Signup</Link></li>
                    <li className="nav-item"><Link to={"/login"} className="nav-link">Login</Link></li>
                </ul>
                </header>
            </div>
        </div>
    )
}

export default Navbar
