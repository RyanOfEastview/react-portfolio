import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'


function Footer() {
    console.log()
    return (
        <footer className="min-vh-100 py-2">

            <a href="https://github.com/HiuSumJaimeYue" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="4x" className="footer-icon" />
            </a>
            <a href="https://www.linkedin.com/in/hiu-sum-jaime-yue-2b8a1b1b9/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="4x" className="footer-icon" />
            </a>
            <a href="https://m.facebook.com/jaime.yue/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="4x" className="footer-icon" />
            </a>

        </footer>
    )
}

export default Footer