import { useState } from "react";
import { LoginForm } from "../common/LoginPage/Form";
import { LoginButton } from "../common/LoginPage/LoginButton";
import type { Credentials } from "../../types/userCredentials";

export function LoginPage () {
    const [attempt, setAttempt] = useState<Credentials>(
        {username: "", password:""}
    );
    return (
        <>
            <div className="default-container-scheme login-form">
                <LoginForm
                    attempt={attempt}
                    setAttempt={setAttempt}
                    />
                <LoginButton
                attempt={attempt}
                />
            </div>
        </>
    );
}