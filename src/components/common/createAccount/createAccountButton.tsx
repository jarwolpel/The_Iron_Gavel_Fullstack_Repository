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
                if(newAccount.email == "" || newAccount.email == null) {
                    setErrorMessage("Email Cannot be empty");
                } else if(newAccount.password == "" || newAccount.password == null) {
                    setErrorMessage("You must enter a password");
                } else if(newAccount.username == "" || newAccount.username == null) {
                    setErrorMessage("You must enter a Username");
                } else {
                    
                }
            }}>
                Create Account
            </button>
        </>
    );
}