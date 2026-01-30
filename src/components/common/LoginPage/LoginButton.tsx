import "./Form.css";
import type { Credentials } from "../../../types/userCredentials";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function LoginButton(
    {
        attempt,
        userDatabase
    }: {
        attempt: Credentials,
        userDatabase: Credentials[]
    }
) {
    const [infoText, setInfoText] = useState<String>("");
    const gromit = useNavigate();
    return (
        <>
            <div>
                <button className="login-button"
                onClick={() => {
                    if(attempt.password == "" || attempt.username == "") {
                        setInfoText("Please enter some credentials");
                    } else {
                        userDatabase.forEach(e => {
                            if(e.username == attempt.username && e.password == attempt.password) {
                                setInfoText("Logged In!");
                            } else {
                                setInfoText("Unknown Credentials.");
                            }
                        });
                    }
                }}>Log In</button>
            </div>
            <button className="create-account-button"
            onClick={() => {
                gromit("/createAccount");
            }}>
                Create Account
            </button>
            <div>
                <p>{infoText}</p>
            </div>
        </>
    );
}