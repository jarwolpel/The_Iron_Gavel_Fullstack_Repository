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
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email"
                        onChange={(e) => createNewAccount({...newAccount, email: e.target.value})}
                        />
                    </div>
                </fieldset>
            </form>
        </>
    );
}