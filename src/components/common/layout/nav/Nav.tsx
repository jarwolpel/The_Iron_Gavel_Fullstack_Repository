import { NavLink } from "react-router-dom";
import "./nav.css"
import type { Credentials } from "../../../../types/userCredentials";

export function Nav(
    {
        loggedInUser
    }:{
        loggedInUser: Credentials
    }
) {
    return(
        <nav>
            <ul className="sidebar">
                <li><a className="cinzel-decorative-bold"><h1>Battle Simulator</h1></a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Battles</a></li>
                <li><a href="#">Characters</a></li>
                <li><a href="#"><button>Login</button></a></li>
            </ul>
            <div className="container">
                <div className="title">
                    <a className="cinzel-decorative-bold"><h1>Battle Simulator</h1></a>
                </div>
                <div className="links">
                    <div className="item">
                        <NavLink to="/" end>Home</NavLink>    
                    </div>
                    <div className="item">
                        <NavLink to="/create-battle/characterselect">Character Select</NavLink>
                    </div>
                    <div className="item">
                        <NavLink to="/battles/battle-screen">Battle Screen</NavLink>
                    </div>
                    <div className="item">
                        <NavLink to="/accounts/login"><button>{loggedInUser.username}</button></NavLink>
    
                    </div>
                    <div className="item">
                        <a href="#"><img src="./src/assets/menu.svg" alt="hamburger menu"></img></a>
                    </div>
                    
                </div>
            </div>
        </nav>
    );
}