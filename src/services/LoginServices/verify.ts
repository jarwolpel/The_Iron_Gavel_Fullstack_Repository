import { useUserDatabase } from "../../hooks/useUserDatabase";
import { useLogInAttempt } from "../../hooks/setLoggedInUser";

export function verifyLogin(): Boolean {
    const { userDatabase } = useUserDatabase();
    const { attempt } = useLogInAttempt();
    userDatabase.forEach(e => {
        if(e.username == attempt.username && e.password == attempt.password) {
            return true;
        }
    });
    return false;
}