import "./nav.css"

export function Nav() {
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
                        <a href="#">Home</a>
                    </div>
                    <div className="item">
                        <a href="#">Characters</a>
                    </div>
                    <div className="item">
                        <a href="#"><button>Login</button></a>
                    </div>
                    <div className="item">
                        <a href="#"><img src="./src/assets/menu.svg" alt="hamburger menu"></img></a>
                    </div>
                    
                </div>
            </div>
        </nav>
    );
}