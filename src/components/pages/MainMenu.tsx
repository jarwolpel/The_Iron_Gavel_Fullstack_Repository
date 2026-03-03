// import { useState } from "react";
import { useNavigate } from "react-router";
import { MenuBox } from "../common/menu-box/menuBox";

function MainMenu() {

    let navigate = useNavigate();

    return (
        <>
            <MenuBox>
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
            </MenuBox>
        </>
    )
}

export default MainMenu