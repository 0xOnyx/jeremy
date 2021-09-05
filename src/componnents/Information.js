
import './Information.css'

import {GitHub, Mail, Instagram} from 'react-feather'

function Information(props)
{
//"Full Stack Developer and Vulnerability Analyst/Penetration Tester "

    return (

        <div className="text">
            <h1 className="titre">Jeremy</h1>
            <p className="SouTitre">"Full Stack Developer and Penetration Tester "</p>
            
            <div className="logo">
                <a href="https://github.com/0xOnyx">
                    <GitHub color="white" size={35} />
                </a>
                <a href="mailto:info@jeremy.best">
                    <Mail color="white" size={35} />
                </a>
                <a href="https://www.instagram.com/0xonyx/">
                    <Instagram color="white" size={35} />
                </a>
            </div>
        </div>
    )
}

export default Information
