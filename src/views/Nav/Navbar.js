import React from "react";
import {
    NavLink
} from "react-router-dom";
import './Navbar.scss'

class Navbar extends React.Component {
    render() {
        return (
            <>
                <div className="topnav">
                    <NavLink to="/" exact activeclassname="active">
                        Home
                    </NavLink>

                    <NavLink to="/todo" activeclassname="active">
                        Todo
                    </NavLink>

                    <NavLink to="/about" activeclassname="active">
                        About
                    </NavLink>

                    <NavLink to='/user' activeClassName='active'>
                        User
                    </NavLink>
                </div>
            </>
        )
    }
}
export default Navbar;