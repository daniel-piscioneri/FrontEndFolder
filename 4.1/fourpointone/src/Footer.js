import './Footer.css';

function Footer() {
    return (
    <>
    <div class="ui inverted vertical footer segment">
        <div class="ui center aligned container">
          <div class="ui stackable inverted divided grid">
            <div class="three wide column">
              <h4 class="ui inverted header">Explore</h4>
              <div class="ui inverted link list">
                <a href="#" class="item">Home</a>
                <a href="#" class="item">Questions</a>
                <a href="#" class="item">Articles</a>
                <a href="#" class="item">Tutorials</a>
              </div>
            </div>
            <div class="three wide column">
              <h4 class="ui inverted header">Support</h4>
              <div class="ui inverted link list">
                <a href="#" class="item">FAQs</a>
                <a href="#" class="item">Help</a>
                <a href="#" class="item">Contact Us</a>
              </div>
            </div>
            <div class="seven wide column">
              <h4 class="ui inverted header">Stay Connected</h4>
              <img src="https://picsum.photos/150/150"/>
              <img src="https://picsum.photos/150/150"/>
              <img src="https://picsum.photos/150/150"/>
            </div>
          </div>
          <div class="ui inverted section divider"></div>
          <h4>DEV@Deakin 2024</h4>
          <div class="ui horizontal inverted small divided link list">
          <a class="item" href="#">Privacy Policy</a>
            <a class="item" href="#">Terms</a>
            <a class="item" href="#">Code of Conduct</a>
            
          </div>
        </div>
      </div></>);
}

export default Footer;

