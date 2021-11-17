import React from 'react'

function Project({name, img, type}) {
    return (
        <div className="ProjectMiniature">
            <div className="contenu">
                <img src={img} alt="miniature site web" />
                <p>{name}</p>
            </div>
            <div className="overlay">
                <p>Voir plus</p>
            </div>
        </div>
    )
}

export default Project
