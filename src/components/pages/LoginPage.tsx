import { LoginForm } from "../common/LoginPage/LoginForm";
import { MenuBox } from "../common/menu-box/menuBox";

export function LoginPage () {
    return (
        <>
            <MenuBox>
                <div className="login-form">
                    <LoginForm/>
                </div>
            </MenuBox>
        </>
    );
}