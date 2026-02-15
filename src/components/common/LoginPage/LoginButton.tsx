import "./Form.css";
import type { Credentials } from "../../../types/userCredentials";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyLogin } from "../../../services/LoginServices/verify";
import { setLoggedInUser } from "../../../hooks/setLoggedInUser";


export function LoginButton(
    {
        attempt,
        userDatabase,
    }: {
        attempt: Credentials,
        userDatabase: Credentials[],
    }
) {
    const [infoText, setInfoText] = useState<String>("");
    const navigator = useNavigate();
    return (
        <>
            <div className="login-buttons">
                <div>
                    <button
                    onClick={() => {
                        if(attempt.password == "" || attempt.username == "") {
                            setInfoText("Please enter some credentials");
                        } else {
                            if(verifyLogin({attempt, userDatabase})){
                                setLoggedInUser(attempt.username);
                                navigator("/");
                            } else {
                                setInfoText("Unknown Credentials.");
                            }
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
            </div>
        </>
    );
}