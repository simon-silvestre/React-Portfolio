import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function ProjectDetail({name, type, img, date, message, link, close}) {
    return (
        <div className="ProjectDetails">
            <FontAwesomeIcon icon={faTimes} onClick={close}></FontAwesomeIcon>
            <h2>{name}</h2>
            <div className="details">
                <div className="date">
                    <p>date</p>
                    <p>{date}</p>
                </div>
                <div className="langage">
                    <p>langage</p>
                    <p>{type}</p>
                </div>
                <a href={link} target="_blank" rel="noreferrer">voir le site</a>
            </div>
            <p className="message">{message}</p>
            <div className="image">
                <img src={img} alt="site web" />
            </div>
        </div>
    )
}

export default ProjectDetail
