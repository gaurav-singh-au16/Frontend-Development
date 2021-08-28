import React from 'react'
import {Link} from 'react-router-dom'
import {LABELS, PATHS} from '../../config'

function Navbar() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand text-danger" to={PATHS.HOME}>MyStore</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active text-warning" aria-current="page"  to={PATHS.HOME}>{LABELS.home}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-warning" to={PATHS.PRODUCTS}>{LABELS.products}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-warning" to={PATHS.LOGIN}>{LABELS.login}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-warning"  tabIndex="-1" to={PATHS.SIGNUP}>{LABELS.signup}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-warning"  tabIndex="-1" to={PATHS.CART}>{LABELS.cart}-{0}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
