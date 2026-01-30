import { useState } from "react";
import type { Credentials } from "../../../types/userCredentials";


export function CreateAccountForm(
    {
        newAccount,
        createNewAccount
    }:{
        newAccount: Credentials,
        createNewAccount: React.Dispatch<React.SetStateAction<Credentials>>
    }
) {
    const [emailVisibility, toggleEmailVisibility] = useState(false); 
    return(
        <>
            <form action="">
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
                        <label htmlFor="showEmail">Email (Optional)</label>
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
        </>
    );
}