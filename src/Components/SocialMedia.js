import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function SocialMedia() {
    return (
        <div className="SocialMedia">
            <a href="https://github.com/simon-silvestre"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
            <a href="https://www.linkedin.com/in/simon-silvestre-3214b51b6/"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
        </div>
    )
}

export default SocialMedia
