// import { useState } from "react";
import { useNavigate } from "react-router";
import { MenuBox } from "../common/menu-box/menuBox";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";

function MainMenu() {

    let navigate = useNavigate();

    return (
        <>
            <MenuBox>
                <SignedOut>
                    <div className="signedOut">
                        <SignInButton />
                    </div>
                </SignedOut>
                <SignedIn>
                    <div className="MainButtons">
                        <button
                            onClick={() => navigate("/test-character-select2")}
                        >
                                New Battle
                        </button>
                        <button
                            onClick={() => navigate("/load-battle")}
                        >
                            Load Battle
                        </button>
                    </div>
                </SignedIn>
            </MenuBox>
        </>
    )
}

export default MainMenu