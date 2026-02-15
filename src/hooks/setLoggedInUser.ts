import { useState } from "react";
import type { Credentials } from "../types/userCredentials";

export function setLoggedInUser(name?: string): string {
    const [loggedInUser, setUser] = useState<string>("Login");

    if (name) {
        setUser(name);
    }
    
    return loggedInUser;
}

export function logInAttempt(login?: Credentials): Credentials {
    const [attempt, setAttempt] = useState<Credentials>(
        {username: "", password:""}
    );
    if(login) {
        setAttempt({...attempt, username: login.username});
        setAttempt({...attempt, password: login.password});
        setLoggedInUser(logInAttempt().username);
    }

    return attempt;
}