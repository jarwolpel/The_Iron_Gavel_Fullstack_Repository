import { useState } from "react";
import "./createAccount.css";
import { useCreateAccount } from "../../../hooks/useUserDatabase";


export function CreateAccountForm() {
    const [emailVisibility, toggleEmailVisibility] = useState(false);

    const { addAccount } = useCreateAccount();
    return(
        <>
            <form className="create-account-form" action="">
                <fieldset>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username"
                        onChange={(e) => addAccount({username: e.target.value})}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="text" name="password"
                        onChange={(e) => addAccount({password: e.target.value})}
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
                        onChange={(e) => addAccount({email: e.target.value})}
                        />
                    </div>
                    )}
                </fieldset>
            </form>
        </>
    );
}