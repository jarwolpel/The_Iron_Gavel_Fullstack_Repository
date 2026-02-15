import type { Credentials } from "../../types/userCredentials";
import { userDatabase } from "../../hooks/userDatabase";

export function verifyLogin(
    {
        attempt,
    }: {
        attempt: Credentials, 
    }
): Boolean {
    userDatabase().forEach(e => {
        if(e.username == attempt.username && e.password == attempt.password) {
            return true;
        }
    });
    return false;
}