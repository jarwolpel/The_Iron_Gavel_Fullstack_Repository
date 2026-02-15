/**
 * This will most likely be removed once we get a proper database
 * up and running but for now it will handle the state for the
 * temporary user database and maybe cookie if I feel so bold
 */
import { useState } from "react";
import { fetchCredentials } from "../apis/UserCredsAPI/credentialsAPI";
import type { Credentials } from "../types/userCredentials";



export function userDatabase(newUser?: Credentials): Credentials[]{
    const [userDatabase, updateUserDatabase] = useState<Credentials[]>(fetchCredentials);
    if(newUser) {
        updateUserDatabase([...userDatabase, newUser]);
    }
    
    return userDatabase;
}