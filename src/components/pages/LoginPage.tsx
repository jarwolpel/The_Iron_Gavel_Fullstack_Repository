import { useState } from "react";
import { LoginForm } from "../common/LoginPage/Form";
import { LoginButton } from "../common/LoginPage/LoginButton";
import type { Credentials } from "../../types/userCredentials";
import { MenuBox } from "../common/menu-box/menuBox";

export function LoginPage (
    {
        userDatabase,
        loggedInUser,
        setLoggedInUser
    }: {
        userDatabase: Credentials[],
        loggedInUser: Credentials,
        setLoggedInUser: React.Dispatch<React.SetStateAction<Credentials>>
    }
) {
    const [attempt, setAttempt] = useState<Credentials>(
        {username: "", password:""}
    );
    return (
        <>
            <MenuBox>
                <div className="login-form">
                    <LoginForm
                        attempt={attempt}
                        setAttempt={setAttempt}
                    />
                    <LoginButton
                        attempt={attempt}
                        userDatabase={userDatabase}
                        loggedInUser={loggedInUser}
                        setLoggedInUser={setLoggedInUser}
                    />
                </div>
            </MenuBox>
        </>
    );
}