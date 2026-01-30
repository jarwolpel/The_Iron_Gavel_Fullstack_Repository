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
    const [errorMessage, setErrorMessage] = useState<String>("");
    return (
        <>
            <div>
                <p>{errorMessage}</p>
            </div>
            <button
            onClick={() => {
                 if(newAccount.password == "" || newAccount.password == null) {
                    setErrorMessage("You must enter a password");
                } else if(newAccount.username == "" || newAccount.username == null) {
                    setErrorMessage("You must enter a Username");
                } else {
                    // Add new account to 'database' and then return to login,
                    // They should be able to use this new log in.
                }
            }}>
                Create Account
            </button>
        </>
    );
}