import React from 'react'
import {Link} from 'react-router-dom'

function Listings() {
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link  className="btn btn-primary m-3">Add To Cart</Link>
                    <Link  className="btn btn-danger">Buy Now</Link>
                </div>
            </div>
        </div>
    )
}

export default Listings
