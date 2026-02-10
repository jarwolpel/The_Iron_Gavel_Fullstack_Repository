import type { Credentials } from "../../types/userCredentials";

export function verifyLogin(
    {
        attempt,
        userDatabase
    }: {
        attempt: Credentials, 
        userDatabase: Credentials[]
    }
): Boolean {
    userDatabase.forEach(e => {
        if(e.username == attempt.username && e.password == attempt.password) {
            return true;
        }
    });
    return false;
}