import type { Credentials } from "../types/userCredentials";
import { useUserDatabase } from "./useUserDatabase";
import { useSessionUser } from "./useSessionUser";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function useLoginAttempt() {
    const [error, setError] = useState<string>("");
    
    // Update users state
    const { users, getUsers } = useUserDatabase([]);

    const { setSessionUser } = useSessionUser();
    const navigator = useNavigate();

    const attemptLogin = (attempt: Credentials) => {
        
        getUsers();
        // Reset error message when called
        setError("");

        if(attempt.username == "" || attempt.password == "") {

            setError("Please enter some credentials");

        } else {
            users.forEach(e => {
                if(e.username == attempt.username && e.password == attempt.password) {
                    
                    setSessionUser(attempt.username);
                    navigator("/");

                } else {
                    setError("Unknown Credentials");
                }
            });
        }
    }

    return { attemptLogin, error }
}