import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Content from './Content'

function HomePage() {
    return (
        <div>
            <Navbar />
            <Content />
            <Content />
            <Footer />
        </div>
    )
}

export default HomePage
