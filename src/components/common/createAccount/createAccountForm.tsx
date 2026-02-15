import { useState } from "react";
import "./createAccount.css";
import { createNewAccount } from "../../../hooks/userDatabase";


export function CreateAccountForm() {
    const [emailVisibility, toggleEmailVisibility] = useState(false);
    return(
        <>
            <form className="create-account-form" action="">
                <fieldset>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username"
                        onChange={(e) => createNewAccount({username: e.target.value})}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="text" name="password"
                        onChange={(e) => createNewAccount({password: e.target.value})}
                        />
                    </div>
                    <div>
                        <input type="checkbox" checked={emailVisibility} name="showEmail"
                            onChange={(e) => toggleEmailVisibility(e.target.checked)}
                        />
                        <label htmlFor="showEmail">Email (Optional)</label>
                    </div>
                    {emailVisibility && (
                        <div>
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email"
                        onChange={(e) => createNewAccount({email: e.target.value})}
                        />
                    </div>
                    )}
                </fieldset>
            </form>
        </>
    );
}