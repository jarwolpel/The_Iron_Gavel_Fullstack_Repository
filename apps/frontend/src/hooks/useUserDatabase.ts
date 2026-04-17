/**
 * This will most likely be removed once we get a proper database
 * up and running but for now it will handle the state for the
 * temporary user database and maybe cookie if I feel so bold
 */
import { useEffect, useState } from "react";
import type { Credentials } from "../types/userCredentials";

import * as credService from "../services/credentialsService";
import { useAuth } from "@clerk/clerk-react";

export function useUserDatabase( dependencies: unknown[] ){
    const [users, updateUsers] = useState<Credentials[]>([]);
    const [error, setError] = useState<string | null>();
    const {getToken, isSignedIn} = useAuth();

    const getUsers = async() => {
        try {
            let result = await credService.fetchCredentials();
            updateUsers([...result]);
        } catch(errorObject) {
            setError(`${errorObject}`);
        }
    }

    const createNewUser = async(user: Credentials) => {
        try {
            let sessionToken = isSignedIn? await getToken() : null;
            if(!sessionToken) {
                throw new Error("Failed to add user, session token cannot be null");
            } else {
                await credService.addUser(user, sessionToken);
            }

            await getUsers();
        } catch(errorObject) {
            setError(`${errorObject}`);
        }
    }

    useEffect(() => {
        getUsers();
    }, [...dependencies]);

    return {
        users,
        error,
        createNewUser,
        getUsers
    }
}