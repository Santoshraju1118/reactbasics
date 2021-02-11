import React from 'react';
import { useHistory } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    const history = useHistory();
    
    return (
        <div>
            <div style={{display: "flex", alignItems: "center", justifyContent:"space-between", backgroundColor:"red"}}>
                <div className="navbar__logo" onClick={() => history.push("/")}>
                    S!
                </div>
                <div className="navbar__login" style={{padding: "16px", textAlign: "right"}}>
                    <button>Login</button>
                    <button style={{marginLeft: "8px" }}>Create an account</button>
                </div>
            </div>

        </div>
    )
}

export default Navbar
