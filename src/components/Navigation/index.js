import React from 'react';
import "../../css/styles.css";


function Navigation(props) {

    return (
        <header>
            <div>
                <h1>Amanda Hoshor</h1>
            </div>
            <div>
                <Navigation>
                    <ul>
                        <li>Me</li>
                        <li>Portfolio</li>
                        <li>Contact</li>
                    </ul>
                </Navigation>
            </div>
        </header>
    );
}

export default Navigation;