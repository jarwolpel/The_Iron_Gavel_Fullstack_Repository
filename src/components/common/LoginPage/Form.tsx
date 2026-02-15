import "./Form.css";
import "../../../App.css";
import { logInAttempt } from "../../../hooks/setLoggedInUser";

export function LoginForm() {
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
                        onChange={(e) => logInAttempt({username: e.target.value})}/>
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password:</label>
                        <input type="text" name="password"
                        onChange={(e) => logInAttempt({password: e.target.value})}/>
                    </div>
                </fieldset>
            </form>
        </>
    );
}

export default LoginForm;