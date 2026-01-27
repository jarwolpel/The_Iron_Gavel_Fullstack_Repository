import "./Form.css";
import type { Credentials } from "../../../types/userCredentials";
import { useState } from "react";
import { userCredentials } from "../../../../data/userCredentials";

export function LoginButton({attempt}: {attempt: Credentials}) {
    const [infoText, setInfoText] = useState<String>("");
    return (
        <>
            <button className="login-button"
            onClick={() => {
                if(attempt.password == "" || attempt.username == "") {
                    setInfoText("Please enter some credentials");
                } else {
                    userCredentials.forEach(e => {
                        if(e.username == attempt.username && e.password == attempt.password) {
                            setInfoText("Logged In!");
                        } else {
                            setInfoText("Unknown Credentials.");
                        }
                    });
                }
            }}>Log In</button>
            <div>
                <p>{infoText}</p>
            </div>
        </>
    );
}