import React from 'react'
import './NavBar.css'


class NavBar extends React.Component {
    render(){
        return(
            <div className="nav-bar">
                <h3 className="app-name">Image Editor</h3>
                <div className="login-btn">
                    <a href="#" style={{float:"right"}}>Login</a>
                </div>
            </div>
        )
    }
}

export default NavBar;