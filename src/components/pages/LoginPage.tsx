import { LoginForm } from "../common/LoginPage/Form";
import { LoginButton } from "../common/LoginPage/LoginButton";
import { MenuBox } from "../common/menu-box/menuBox";

export function LoginPage () {
    return (
        <>
            <MenuBox>
                <div className="login-form">
                    <LoginForm/>
                    <LoginButton/>
                </div>
            </MenuBox>
        </>
    );
}