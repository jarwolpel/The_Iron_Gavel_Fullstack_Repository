import { userDatabase } from "../../hooks/useUserDatabase";
import { logInAttempt } from "../../hooks/setLoggedInUser";

export function verifyLogin(): Boolean {
    userDatabase().forEach(e => {
        if(e.username == logInAttempt().username && e.password == logInAttempt().password) {
            return true;
        }
    });
    return false;
}