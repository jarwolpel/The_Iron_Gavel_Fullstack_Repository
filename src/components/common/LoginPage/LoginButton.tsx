import "./Form.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyLogin } from "../../../services/LoginServices/verify";
import { useLogInAttempt } from "../../../hooks/setLoggedInUser";


export function LoginButton() {
    const [infoText, setInfoText] = useState<String>("");
    const navigator = useNavigate();

    const {attempt} = useLogInAttempt();
    return (
        <>
            <div className="login-buttons">
                <div>
                    <button
                    onClick={() => {
                        if(attempt.password == "" || attempt.username == "") {
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