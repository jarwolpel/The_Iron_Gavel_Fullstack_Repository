import { useState } from "react";
import type { Credentials } from "../types/userCredentials";

export function useSetLoggedInUser() {
    const [loggedInUser, setUser] = useState<string>("Login");

    const displayUser = (user: string) => {
        setUser(user);
    };
    
    return {loggedInUser, displayUser};
}

export function useLogInAttempt() {
    const [attempt, setAttempt] = useState<Credentials>(
        {username: "", password:""}
    );

    const createAttempt = (userCreds: Credentials) => {
        setAttempt({...attempt, ...userCreds})
    }

    return {attempt, createAttempt};
}