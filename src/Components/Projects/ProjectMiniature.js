import React from 'react'

function Project({name, img, display}) {
    return (
        <div className="ProjectMiniature">
            <div className="contenu">
                <img src={img} alt="miniature site web" />
                <p>{name}</p>
            </div>
            <div className="overlay">
                <p onClick={display}>Voir plus</p>
            </div>
        </div>
    )
}

export default Project
