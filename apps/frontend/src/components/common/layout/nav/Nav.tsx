import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import "./nav.css"
import { useSessionUser } from "../../../../hooks/useSessionUser";

export function Nav() {
    const [isVisible, setIsVisible] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target as Node)
            ) {
                setIsVisible(false)
            }
        }

        if (isVisible) {
            document.addEventListener("mousedown", handleClickOutside)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }

    }, [isVisible])

    const { getSessionUser } = useSessionUser();

    return(
        <nav className="roboto-heading">
            {/* Sidebar Links here */}
            {isVisible && (
                <div className="sidebar" ref={sidebarRef}>
                    <div className="sidebar-links">
                        <div 
                            className="menu item"
                            onClick={() => setIsVisible(!isVisible)}
                        >
                            <a href="#"><img src="./src/assets/close.svg" alt="hamburger menu"></img></a>
                        </div>
                        <div className="item">
                            <NavLink to="/" end>Home</NavLink>
                        </div>
                        <div className="item">
                                <SignedIn>
                                    <NavLink to="/test-character-select2">Character Select</NavLink>
                                </SignedIn>
                        </div>
                        <div className="item">
                            <SignedIn>
                                <NavLink to="/battles/battle-screen">Battle Screen</NavLink>
                            </SignedIn>
                        </div>
                        <div className="item">
                            <SignedIn>
                                <NavLink to="/Favorites">Favorite</NavLink>
                            </SignedIn>
                        </div>
                        <div className="item">
                            <SignedOut>
                                <SignInButton />
                            </SignedOut>

                            <NavLink to="/accounts/login"><button>Login</button></NavLink>
                        </div>
                        <div className="item profile">
                            <SignedIn>
                                <a href="#">
                                    <UserButton />
                                    {/* <img src="./src/assets/account_circle.svg" alt="profile pic"></img> */}
                                    <p>{getSessionUser()}</p>
                                </a>
                            </SignedIn>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Nav Links here */}
            <div className="container">
                <div className="title">
                    <a className="cinzel-decorative-bold"><h1>Battle Simulator</h1></a>
                </div>
                <div className="links">
                    <div className="nav-links">
                        <div className="item">
                            <NavLink to="/" end>Home</NavLink>    
                        </div>
                        <div className="item">
                            <SignedIn>
                                <NavLink to="/test-character-select2">Character Select</NavLink>
                            </SignedIn>
                        </div>
                        <div className="item">
                            <SignedIn>
                                <NavLink to="/battles/battle-screen">Battle Screen</NavLink>
                            </SignedIn>
                        </div>
                        <div className="item">
                            <SignedIn>
                                <NavLink to="/Favorites">Favorite</NavLink>
                            </SignedIn>
                        </div>
                        <div className="item">
                            <SignedOut>
                                <SignInButton />
                            </SignedOut>

                            <SignedIn>
                                <NavLink to="/accounts/login"><button>Login</button></NavLink>
                            </SignedIn>
        
                        </div>
                        <div className="item profile">
                            <SignedIn>
                                <a href="#">
                                <UserButton />
                                    {/* <img className="profile-bits" src="./src/assets/account_circle.svg" alt="profile pic"></img> */}
                                    <p className="profile-bits">{getSessionUser()}</p>
                                </a>
                            </SignedIn>

                        </div>
                    </div>

                    {/* hamburger menu */}
                    <div 
                    className="menu item"
                    onClick={() => setIsVisible(!isVisible)}
                    >
                        <a href="#"><img src="./src/assets/menu.svg" alt="hamburger menu"></img></a>
                    </div>
                </div>
            </div>
        </nav>
    );
}