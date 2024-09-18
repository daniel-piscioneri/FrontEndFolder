import React from "react";

function Footer(){
    return(
        <div className="Footer">
            <div className="footer-left">
                <Link to='/about'>About Deakin</Link>
            </div>
            <div className="footer-center">
                <Link to='/connect'>Connect With Us</Link>
            </div>
            <div className="footer-right">
                <h2>Social</h2>
            </div>
        </div>
    )
}

export default Footer