import { useState } from "react";
import { CreateAccountButton } from "../common/createAccount/createAccountButton";
import { CreateAccountForm } from "../common/createAccount/createAccountForm";
import type { Credentials } from "../../types/userCredentials";
import { MenuBox } from "../common/menu-box/menuBox";

export function CreateAccount(
    {
        userDatabase,
        updateUserDatabase
    }: {
        userDatabase: Credentials[],
        updateUserDatabase: React.Dispatch<React.SetStateAction<Credentials[]>>
    }
) {
    const [newAccount, createNewAccount] = useState<Credentials>(
        {
            username: "",
            id: 0,
            email: "Unset",
            password: ""
        }
    );
    return (
        <>
            <MenuBox>
                <div>
                    <CreateAccountForm
                        newAccount={newAccount}
                        createNewAccount={createNewAccount}
                    />
                    <CreateAccountButton
                        newAccount={newAccount}
                        createNewAccount={createNewAccount}
                        userDatabase={userDatabase}
                        updateUserDatabase={updateUserDatabase}
                    />
                </div>
            </MenuBox>
        </>
    );
}