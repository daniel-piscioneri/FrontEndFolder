import { Outlet } from "react-router-dom";
import Example from "../search";
import '../HomePage.css'
import Input from "../Input"
import { useState } from "react"
import Mailgun from 'mailgun.js';
import formData from 'form-data';
import {SocialIcon} from 'react-social-icons';

function HomePage() {
    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY || '8a94b9224364daf6bc59146c8faca2d6-0f1db83d-ab421ccf' });

    const [contact, setContact] = useState({
        email: ''
    })

    const { email } = contact;

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
        event.preventDefault();
        mg.messages.create('sandbox-123.mailgun.org', {
            from: "Excited User <mailgun@sandbox-123.mailgun.org>",
            to: [email.toString()],
            subject: "Hello",
            text: "Testing some Mailgun awesomness!",
            html: "<h1>Testing some Mailgun awesomness!</h1>"
        })
            .then(msg => console.log(msg)) // logs response data
            .catch(err => console.error(err)); // logs any error
            alert("email sent successfully");
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
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
            <div class="ui inverted vertical segment">
                <div className="email subscribe component">
                    <h1>SIGN UP TO DEAKIN NEWSLETTER</h1>
                    <form action="/" method="post">
                        <Input type="email" name="email" placeholder="email" onChange={handleChange} value={contact.email} />
                        <button onClick={testEmail}>Sign Up</button>
                    </form>
                </div>
                <div class="ui container">
                    <div class="ui inverted stackable divided grid">
                        <div class="row">
                            <div class="three wide columns">
                                <h4 class="ui inverted header">Explore</h4>
                                <div role="list" class="ui inverted link list">
                                    <a role="listitem" class="item">Home</a>
                                    <a role="listitem" class="item">Questiosn</a>
                                    <a role="listitem" class="item">Atricles</a>
                                    <a role="listitem" class="item">Tutorials</a>
                                </div>
                            </div>
                            <div class="three wide columns">
                                <h4 class="ui inverted header">Support</h4>
                                <div role="list" class="ui inverted link list">
                                    <a role="listitem" class="item">FAQs</a>
                                    <a role="listitem" class="item">Help</a>
                                    <a role="listitem" class="item">Contact Us</a>
                                </div>
                            </div>
                            <div class="three wide columns">
                                <h4 class="ui inverted header">Stay Connected</h4>
                                {/* for the icons i used react icons and not images as i wanted mine to be dynamic and with the library of react
                                 this was done using, npm install react-social-icons 
                                 then I had imported such at the top of the page and then added as follows below.*/}
                                <SocialIcon url="www.facebook.com"/>
                                <SocialIcon url="www.x.com"/>
                                <SocialIcon url="www.instagram.com"/>
                                <SocialIcon url="www.linkedin.com"/>
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
