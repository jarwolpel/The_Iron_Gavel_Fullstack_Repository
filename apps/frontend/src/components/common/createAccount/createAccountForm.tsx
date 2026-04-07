import { useState } from "react";
import "./createAccount.css";
import { useNavigate } from "react-router-dom";
import { useUserDatabase } from "../../../hooks/useUserDatabase";
import type { Credentials } from "../../../types/userCredentials";


export function CreateAccountForm() {
    const [emailVisibility, toggleEmailVisibility] = useState(false);

    const [errorMessage, setErrorMessage] = useState<String>("");
    const navigator = useNavigate();

    const { error, createNewUser} = useUserDatabase([]);

    const [newAccount, createNewAccount] = useState<Credentials>(
            {
                username: "",
                email: "Unset",
                password: ""
            }
    );
    
    return(
        <>
            <div>
                <h1>Create a new account</h1>
            </div>
            <form className="create-account-form" action="">
                <fieldset>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username"
                        
                        onChange={(e) => createNewAccount({...newAccount, username: e.target.value})}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="text" name="password"
                        onChange={(e) => createNewAccount({...newAccount, password: e.target.value})}
                        />
                    </div>
                    <div>
                        <input type="checkbox" checked={emailVisibility} name="showEmail"
                            onChange={(e) => toggleEmailVisibility(e.target.checked)}
                        />
                        <label htmlFor="showEmail">Email 
                            (Optional)</label>
                    </div>
                    {emailVisibility && (
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="text" name="email"
                            onChange={(e) => createNewAccount({...newAccount, email: e.target.value})}
                            />
                        </div>
                    )}
                </fieldset>
            </form>
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
                    createNewAccount({...newAccount});
                    createNewUser(newAccount);
                    navigator("/accounts/login");
                }
            }}>
                Create Account
            </button>
            <div>{error}</div>
        </>
    );
}