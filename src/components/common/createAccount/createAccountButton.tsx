import { useState } from "react";
import type { Credentials } from "../../../types/userCredentials";

export function CreateAccountButton(
    {
        newAccount,
       // createNewAccount
    }: {
        newAccount: Credentials
        //createNewAccount: React.Dispatch<React.SetStateAction<Credentials>>
    }
) {
    const [emailError, setEmailError] = useState<String>("");
    const [passwordError, setPasswordError] = useState<String>("");
    const [usernameError, setUsernameError] = useState<String>("");
    return (
        <>
            <button
            onClick={() => {
                if(newAccount.email == "" || newAccount.email == null) {
                    setEmailError("Email Cannot be empty");
                }
                if(newAccount.password == "" || newAccount.password == null) {
                    setPasswordError("You must enter a password");
                }
                if(newAccount.username == "" || newAccount.username == null) {
                    setUsernameError("You must enter a Username");
                }
            }}>
                Create Account
            </button>
            <div>
                <div>
                    <p>
                        {emailError}
                    </p>
                </div>
                <div>
                    <p>
                        {passwordError}
                    </p>
                </div>
                <div>
                    <p>
                        {usernameError}
                    </p>
                </div>
            </div>
        </>
    );
}