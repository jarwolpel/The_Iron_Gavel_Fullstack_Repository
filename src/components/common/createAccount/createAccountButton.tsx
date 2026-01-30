import { useState } from "react";
import type { Credentials } from "../../../types/userCredentials";
import { useNavigate } from "react-router-dom";
import "./createAccount.css";

export function CreateAccountButton(
    {
        newAccount,
        createNewAccount,
        userDatabase,
        updateUserDatabase
    }: {
        newAccount: Credentials
        createNewAccount: React.Dispatch<React.SetStateAction<Credentials>>,
        userDatabase: Credentials[],
        updateUserDatabase: React.Dispatch<React.SetStateAction<Credentials[]>>
    }
) {
    const [errorMessage, setErrorMessage] = useState<String>("");

    // VsCode says this might be not the best solution but it works for now.
    // Note after merge. There was indeed some issues but it was fixed by refactoring the Router a tiny bit.
    // If this problem becomes major come back and fix it.
    const navigator = useNavigate();
    return (
        <>
            <div>
                <p>{errorMessage}</p>
            </div>
            <button
            onClick={() => {
                if(newAccount.username == "" || newAccount.username == null) {
                    setErrorMessage("You must enter a Username");
                } else if(newAccount.password == "" || newAccount.password == null) {
                    setErrorMessage("You must enter a password");
                } else {
                    createNewAccount({...newAccount, id: Date.now()});
                    updateUserDatabase([...userDatabase, newAccount])
                    navigator("/accounts/login");
                }
            }}>
                Create Account
            </button>
        </>
    );
}