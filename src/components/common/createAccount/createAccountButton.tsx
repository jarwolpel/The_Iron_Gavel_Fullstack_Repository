import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./createAccount.css";
import { userDatabase, createNewAccount } from "../../../hooks/userDatabase";

export function CreateAccountButton() {
    const [errorMessage, setErrorMessage] = useState<String>("");
    const navigator = useNavigate();
    return (
        <>
            <div>
                <p>{errorMessage}</p>
            </div>
            <button
            onClick={() => {
                if(createNewAccount().username == "" || createNewAccount().username == null) {
                    setErrorMessage("You must enter a Username");
                } else if(createNewAccount().password == "" || createNewAccount().password == null) {
                    setErrorMessage("You must enter a password");
                } else {
                    createNewAccount({...createNewAccount(), id: Date.now()});
                    userDatabase(createNewAccount());
                    navigator("/accounts/login");
                }
            }}>
                Create Account
            </button>
        </>
    );
}