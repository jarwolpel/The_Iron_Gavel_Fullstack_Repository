/**
 * This will most likely be removed once we get a proper database
 * up and running but for now it will handle the state for the
 * temporary user database and maybe cookie if I feel so bold
 */
import { useEffect, useState } from "react";
import type { Credentials } from "../types/userCredentials";

import * as credService from "../services/credentialsService";

export function useUserDatabase( dependencies: unknown[] ){
    const [users, updateUsers] = useState<Credentials[]>([]);
    const [error, setError] = useState<string | null>();

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
            await credService.addUser(user);

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