import "./Form.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyLogin } from "../../../services/LoginServices/verify";
import { logInAttempt } from "../../../hooks/setLoggedInUser";


export function LoginButton() {
    const [infoText, setInfoText] = useState<String>("");
    const navigator = useNavigate();
    return (
        <>
            <div className="login-buttons">
                <div>
                    <button
                    onClick={() => {
                        if(logInAttempt().password == "" || logInAttempt().username == "") {
                            setInfoText("Please enter some credentials");
                        } else {
                            if(verifyLogin()){
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