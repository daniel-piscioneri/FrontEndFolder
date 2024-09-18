import React from "react";
import Example from "./search";
import { Link, Outlet } from "react-router-dom";

function Nav() {
    return (
        <div>
            <div className="nav">
                <Link to='/'>
                <h1>DEV@DEAKIN</h1>
                </Link>
                <Example />
                <a>Post</a>
                <Link to='login'>
                    Login
                </Link>
            </div>
            <Outlet />
        </div>

    );
}

export default Nav;