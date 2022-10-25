import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from "@fortawesome/free-solid-svg-icons";

function Footer() {

    return (
        <footer className="my-5" >
            <h1>Footer</h1>
            {/* <i class="fa-brands fa-github"></i> */}
            <FontAwesomeIcon icon="fa-brands fa-github" />
        </footer>
    )
}

export default Footer