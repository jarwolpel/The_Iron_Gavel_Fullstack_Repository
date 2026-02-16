/**
 * This will most likely be removed once we get a proper database
 * up and running but for now it will handle the state for the
 * temporary user database and maybe cookie if I feel so bold
 */
import { useState } from "react";
import { fetchCredentials } from "../apis/UserCredsAPI/credentialsAPI";
import type { Credentials } from "../types/userCredentials";



export function useUserDatabase(){
    const [userDatabase, updateUserDatabase] = useState<Credentials[]>(fetchCredentials);

    const addUser = (newUser: Credentials) => {
        updateUserDatabase([...userDatabase, newUser]);
    }

    return {userDatabase, addUser};
}

export function useCreateAccount() {
    const [newAccount, createNewAccount] = useState<Credentials>(
        {
            username: "",
            id: 0,
            email: "Unset",
            password: ""
        }
    );

    const addAccount = (account: Credentials) => {
        createNewAccount({...newAccount, ...account});
    }

    return {newAccount, addAccount};
}