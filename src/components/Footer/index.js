import React from 'react';
import { SiGithub } from 'react-icons/si';
import { SiLinkedin } from 'react-icons/si';

function Footer() {
    return(
        <footer>
            <div>
                <a href= "https://github.com/mandahos">
                    <SiGithub size={32}/>
                </a>
                <a href= "https://www.linkedin.com/in/amanda-hoshor/">
                    <SiLinkedin size={32}/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;