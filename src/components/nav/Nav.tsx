import "./nav.css"

function Nav() {
    return(
        <nav>
            <div className="nav-left cinzel-decorative-bold">
                <h1>Battle Simulator</h1>
            </div>
            <div className="nav-right roboto-heading">
                <a href="#">Home</a>
                <a href="#">Battles</a>
                <a href="#">Characters</a>
                <button>Login</button>
            </div>
        </nav>
    );
}

export default Nav;