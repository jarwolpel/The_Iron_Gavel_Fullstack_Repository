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
    const navigator = useNavigate();
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
                                navigator("/");
                            } else {
                                setInfoText("Unknown Credentials.");
                            }
                        });
                    }
                }}>Log In</button>
            </div>
            <div>
                <p>{infoText}</p>
            </div>
            <button className="create-account-button"
            onClick={() => {
                navigator("/accounts/createAccount");
            }}>
                Create Account
            </button>
        </>
    );
}