// import { useState } from "react";
import { useNavigate } from "react-router";

function MainMenu() {

    let navigate = useNavigate();

    return (
        <>
            <section className="StartMenu">
                <div className="MainButtons">
                    <button
                    onClick={() => navigate("/create-battle")}
                    >
                        Create Battle
                    </button>
                    <button
                    onClick={() => navigate("/load-battle")}
                    >
                        Load Battle
                    </button>
                </div>
            </section>
        </>
    )
}

export default MainMenu