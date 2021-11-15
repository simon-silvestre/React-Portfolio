import React from 'react'
import NavBar from './NavBar/NavBar'
import Logo from './Logo/Logo'
import Scroll from './Scroll/Scroll'

function Home() {
    return (
        <div className="Home" id="Home">
            <Logo />
            <NavBar />
            <Scroll />
        </div>
    )
}

export default Home
