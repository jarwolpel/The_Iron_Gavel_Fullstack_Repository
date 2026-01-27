import type { UserData } from "../../../types/userDataType";


export function CreateAccountForm(
    {
        newAccount,
        createNewAccount
    }:{
        newAccount: UserData,
        createNewAccount: React.Dispatch<React.SetStateAction<UserData>>
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
                </fieldset>
            </form>
        </>
    );
}