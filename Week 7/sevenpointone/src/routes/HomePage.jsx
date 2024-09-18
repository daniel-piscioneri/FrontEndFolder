import { Outlet } from "react-router-dom";
import Example from "../search";
import '../HomePage.css'

function HomePage() {
    return (
        <div>
            <Outlet />
            <div className="homepage-text">
            <h1>Hello There, welcome to my home page!</h1>
            <h3>This is my work and my page. It will show off some of the work that I have been able to cultivate over the course.</h3>
            <p>There are many ways to show off my work using either <b>bold</b>, <i>italic</i> or <span style={{ color: "red" }}>colored</span>.</p>
            <h4>Instead I'd rather show off one of my other pages that is currently under construction. That being <b><a href="https://www.alternativetechsolutions.com.au" target="_blank" rel="noopner noreferrer">Alternative Tech Solutions</a></b></h4>
            <h4>This is my current project for a business I wish to build in the future. By no means is it near complete but I have put enough work into it that I am willing to show you now.</h4>
            </div></div>

    );
}

export default HomePage;
