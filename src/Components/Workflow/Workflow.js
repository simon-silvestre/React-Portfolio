import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJsSquare, faGithub, faCss3, faVuejs ,faSass, faHtml5, faApple } from '@fortawesome/free-brands-svg-icons'

function Workflow() {
    return (
        <div className="Workflow">
            <h2>mon workflow</h2>
            <div className="languageContainer">
                <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faJsSquare}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faCss3}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faVuejs}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faSass}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faApple}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
            </div>
        </div>
    )
}

export default Workflow
