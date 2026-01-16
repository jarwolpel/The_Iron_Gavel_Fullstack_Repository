import "./nav.css"

function Nav() {
    return(
        <nav>
            <ul className="sidebar">
                <li><a className="cinzel-decorative-bold"><h1>Battle Simulator</h1></a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Battles</a></li>
                <li><a href="#">Characters</a></li>
                <li><a href="#"><button>Login</button></a></li>
            </ul>
            <ul>
                <li><a className="cinzel-decorative-bold"><h1>Battle Simulator</h1></a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Battles</a></li>
                <li><a href="#">Characters</a></li>
                <li><a href="#"><button>Login</button></a></li>
                <li><a href="#"><img src="./src/assets/menu.svg" alt="hamburger menu"></img></a></li>
            </ul>
        </nav>
    );
}

export default Nav;