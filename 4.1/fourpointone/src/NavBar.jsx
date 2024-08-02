import './NavBar.css';
import { MenuItem, Input, Menu } from 'semantic-ui-react'


function NavBar() {
    return (
        <div className="App">
            <h1>DEV@Deakin</h1>
            <MenuItem>
                <Input className='icon' icon='search' placeholder='Search...' />
            </MenuItem>
            <div className="link"><a href="#">Post</a>
            <a href="#">Login</a></div>
            
        </div>
    );
}

export default NavBar;