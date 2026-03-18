import "./Form.css";
import "../../../App.css";
import { useSessionUser } from "../../../hooks/useSessionUser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserDatabase } from "../../../hooks/useUserDatabase";
import type { Credentials } from "../../../types/userCredentials";

export function LoginForm() {
    const [infoText, setInfoText] = useState<String>("");
    const [attempt, setAttempt] = useState<Credentials>({
        username: "",
        password: ""
    });
    const navigator = useNavigate();

    const { users } = useUserDatabase([]);
    const { setSessionUser } = useSessionUser();


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

                        if(attempt.username == "" || attempt.password == "") {

                            setInfoText("Please enter some credentials");

                        } else {
                            users.forEach(e => {
                                if(e.username == attempt.username && e.password == attempt.password) {
                                    
                                    setSessionUser(attempt.username);
                                    navigator("/");

                                } else {
                                    setInfoText("Unknown Credentials");
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
            </div>
        </>
    );
}

export default LoginForm;