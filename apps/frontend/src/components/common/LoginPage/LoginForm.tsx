import "./Form.css";
import "../../../App.css";
import { useState } from "react";
import type { Credentials } from "../../../types/userCredentials";
import { useLoginAttempt } from "../../../hooks/useLoginAttempt";
import { useNavigate } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

export function LoginForm() {
    const [infoText, setInfoText] = useState<String>("");
    const [attempt, setAttempt] = useState<Credentials>({
        username: "",
        password: ""
    });

    const navigator = useNavigate();

    const { attemptLogin, error} = useLoginAttempt();

    return (
        <>
            <div>
                <h1 >Log In</h1>
            </div>
            <form action="" className="login-form">
                <fieldset className="input">

                    <div className="credential">

                        <label htmlFor="username">Username:</label>

                        <input type="text" name="username"
                        onChange={(e) => setAttempt({...attempt, username: e.target.value})}/>

                    </div>

                    <div className="password">

                        <label htmlFor="password">Password:</label>

                        <input type="text" name="password"
                        onChange={(e) => setAttempt({...attempt, password: e.target.value})}/>

                    </div>
                </fieldset>
            </form>
            <div className="login-buttons">
                <div>
                    <button
                    onClick={() => {
                        attemptLogin(attempt);

                        setInfoText(error);
                    }}>Log In</button>
                </div>
                <div>
                    <p>{infoText}</p>
                </div>
                <SignedOut>
                    <div>
                        <p>You must be signed in to Clerk to create a local account!</p>
                    </div>
                </SignedOut>
                <SignedIn>
                <button className="create-account-button"
                onClick={() => {
                    navigator("/accounts/createAccount");
                }}>
                    Create Account
                </button>
                </SignedIn>
            </div>
        </>
    );
}

export default LoginForm;