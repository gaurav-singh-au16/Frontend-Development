import React from 'react'
import {Link} from 'react-router-dom'

function Content() {
    return (
        <div className="container">
            <div className="card text-center">
                <div className="card-header">
                    New Arrival
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link className="btn btn-primary">Go somewhere</Link>
                </div>
                <div className="card-footer text-muted">
                    2 days ago
                </div>
            </div>
        </div>
    )
}

export default Content
