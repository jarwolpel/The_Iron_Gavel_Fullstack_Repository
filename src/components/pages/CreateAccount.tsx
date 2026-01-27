import { useState } from "react";
import { CreateAccountButton } from "../common/createAccount/createAccountButton";
import type { UserData } from "../../types/userDataType";
import { CreateAccountForm } from "../common/createAccount/createAccountForm";

export function CreateAccount() {
    const [newAccount, createNewAccount] = useState<UserData>(
        {
            username: "",
            id: 0,
            email: ""
        }
    );
    return (
        <>
            <div className="default-container-schema">
                <CreateAccountForm
                    newAccount={newAccount}
                    createNewAccount={createNewAccount}
                />
                <CreateAccountButton/>
            </div>
        </>
    );
}