import { Outlet } from "react-router-dom";
import Example from "../search";
import '../HomePage.css'
import Input from "../Input"
import {useState} from "react"

function HomePage() {
    const [contact, setContact] = useState({
        email: ''
    })

    const { email} = contact;

    console.log(contact);

    const handleChange = (event) => {
        const { name, value } = event.target
        setContact((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const testEmail = async (event) => {
        console.log("block reached");
    }

    return (
        <div>
            <Outlet />
            <div className="homepage-text">
                <h1>Hello There, welcome to my home page!</h1>
                <h3>This is my work and my page. It will show off some of the work that I have been able to cultivate over the course.</h3>
                <p>There are many ways to show off my work using either <b>bold</b>, <i>italic</i> or <span style={{ color: "red" }}>colored</span>.</p>
                <h4>Instead I'd rather show off one of my other pages that is currently under construction. That being <b><a href="https://www.alternativetechsolutions.com.au" target="_blank" rel="noopner noreferrer">Alternative Tech Solutions</a></b></h4>
                <h4>This is my current project for a business I wish to build in the future. By no means is it near complete but I have put enough work into it that I am willing to show you now.</h4>
            </div>
            <div className="ui inverted vertical segment">
                <div className="email subscribe component">
                    <h1>SIGN UP TO DEAKIN NEWSLETTER</h1>
                    <form action="/" method="post">
                        <Input type="email" name="email" placeholder="email" onChange={handleChange} value={contact.email} />
                        <button onClick={testEmail}>Sign Up</button>
                    </form>
                </div>
                <div className="ui container">
                    <div className="ui inverted stackable divided grid">
                        <div className="row">
                            <div className="three wide columns">
                                <h4 className="ui inverted header">Explore</h4>
                                <div role="list" className="ui inverted link list">
                                    <a role="listitem" className="item">Home</a>
                                    <a role="listitem" className="item">Questiosn</a>
                                    <a role="listitem" className="item">Atricles</a>
                                    <a role="listitem" className="item">Tutorials</a>
                                </div>
                            </div>
                            <div className="three wide columns">
                                <h4 className="ui inverted header">Support</h4>
                                <div role="list" className="ui inverted link list">
                                    <a role="listitem" className="item">FAQs</a>
                                    <a role="listitem" className="item">Help</a>
                                    <a role="listitem" className="item">Contact Us</a>
                                </div>
                            </div>
                            <div className="three wide columns">
                                <h4 className="ui inverted header">Stay Connected</h4>
                                <p>I would have put symbols here but instead i will put a link to a funny youtube video.</p>
                                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">video</a>
                            </div>
                        </div>
                        <div className="underneath section">
                            <h3>DEV@Deakin - Daniel</h3>
                            <div className="under list">
                                <p>Privacy Policy</p>
                                <p>Terms</p>
                                <p>Code of Conduct</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default HomePage;
