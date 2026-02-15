import { CreateAccountButton } from "../common/createAccount/createAccountButton";
import { CreateAccountForm } from "../common/createAccount/createAccountForm";
import { MenuBox } from "../common/menu-box/menuBox";

export function CreateAccount() {
    return (
        <>
            <MenuBox>
                <div>
                    <CreateAccountForm/>
                    <CreateAccountButton/>
                </div>
            </MenuBox>
        </>
    );
}