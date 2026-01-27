import { useState } from "react";
import { CreateAccountButton } from "../common/createAccount/createAccountButton";
import { CreateAccountForm } from "../common/createAccount/createAccountForm";
import type { Credentials } from "../../types/userCredentials";

export function CreateAccount() {
    const [newAccount, createNewAccount] = useState<Credentials>(
        {
            username: "",
            id: 0,
            email: "",
            password: ""
        }
    );
    return (
        <>
            <div className="default-container-schema">
                <CreateAccountForm
                    newAccount={newAccount}
                    createNewAccount={createNewAccount}
                />
                <CreateAccountButton
                    newAccount={newAccount}
                />
            </div>
        </>
    );
}