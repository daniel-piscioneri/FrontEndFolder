import './Art.css';

function Art() {
    return (
        <><div>
            <h2>Featured Articles</h2>
            <div class="ui divided items">
                <div className="items">
                    <div class="image">
                        <img src="https://picsum.photos/400/400" />
                    </div>
                    <h3>Article's Name</h3>
                    <p>Description _______</p>
                    <p className="grey-text">e.g, React OR Vue</p>
                    <p className="line-break">--------------------</p>
                    {/* <div class="content">
    </div> */}
                    <i aria-hidden="true" class="favorite icon">5 Daniel Piscioneri</i>


                </div>
                <div class="items">
                    <div class="image">
                    <img src="https://picsum.photos/400/400" />
                    </div>
                    <h3>Article's Name</h3>
                    <p>Description _______</p>
                    <p className="grey-text">e.g, NodeJS</p>
                    <p className="line-break">--------------------</p>
                    {/* <div class="content">
    </div> */}
                    <i aria-hidden="true" class="favorite icon">5 Daniel Piscioneri</i>
                </div>
                <div class="items">
                    <div class="image">
                    <img src="https://picsum.photos/400/400" />
                    </div>
                    <h3>Article's Name</h3>
                    <p>Description _______</p>
                    <p className="grey-text">e.g, React Hooks</p>
                    <p className="line-break">--------------------</p>
                    {/* <div class="content">
    </div> */}
                    <i aria-hidden="true" class="favorite icon">5 Daniel Piscioneri</i>
                </div>
            </div>
            <div class="button-div">
                <button className="button">See all Articles</button>
            </div>
        </div><div>
            <h2>Featured Tutorials</h2>
                <div class="ui divided items">
                    <div className="items">
                        <div class="image">
                        <img src="https://picsum.photos/400/400" />
                        </div>
                        <h3>Article's Name</h3>
                        <p>Description _______</p>
                        <p className="grey-text">e.g, JS6 ____________</p>
                        <p className="line-break">--------------------</p>
                        {/* <div class="content">
    </div> */}
                        <i aria-hidden="true" class="favorite icon">5 Daniel Piscioneri</i>


                    </div>
                    <div class="items">
                        <div class="image">
                        <img src="https://picsum.photos/400/400" />
                        </div>
                        <h3>Article's Name</h3>
                        <p>Description _______</p>
                        <p className="grey-text">e.g, React Router</p>
                        <p className="line-break">--------------------</p>
                        {/* <div class="content">
    </div> */}
                        <i aria-hidden="true" class="favorite icon">5 Daniel Piscioneri</i>
                    </div>
                    <div class="items">
                        <div class="image">
                        <img src="https://picsum.photos/400/400" />
                        </div>
                        <h3>Article's Name</h3>
                        <p>Description _______</p>
                        <p className="grey-text">e.g, Express</p>
                        <p className="line-break">--------------------</p>
                        {/* <div class="content">
    </div> */}
                        <i aria-hidden="true" class="favorite icon">5 Daniel Piscioneri</i>
                    </div>
                </div>
                <div class="button-div">
                    <button className="button">See all Tutorials</button>
                </div>
            </div>
            
            {/* Sign up */}
            
            <div class="signup">
            <h3>SIGN UP FOR OUR FAILY INSIDER</h3>
            <input type="text" placeholder='Enter your email'>
            </input>
            <button>Subscribe</button>
            </div>
            </>
    );
}

export default Art;