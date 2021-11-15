import React from 'react'
import NavBar from './NavBar/NavBar'
import Logo from './Logo/Logo'
import Souris from './Souris/Souris'

function Home() {
    return (
        <div className="Home">
            <Logo />
            <NavBar />
            <Souris />
        </div>
    )
}

export default Home
