import "./Form.css";
import "../../../App.css";
import type { Credentials } from "../../../types/userCredentials";

export function LoginForm(
    {
        attempt, 
        setAttempt
    }: {
        attempt: Credentials,
        setAttempt: React.Dispatch<React.SetStateAction<Credentials>>
        
    }) {
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
        </>
    );
}

export default LoginForm;