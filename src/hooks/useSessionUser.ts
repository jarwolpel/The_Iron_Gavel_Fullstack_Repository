import type { Credentials } from "../types/userCredentials";

export function useSessionUser() {
    // Login attempt cookies get/set

    // Return an array with 2 values, 0: The Username, and 1: the password
    // If this is called before cookie exists, then set the returned cookie to empty
    const getLoginAttempt = () => {
        let cookie = document.cookie.split("; ").find(ele => ele.startsWith(`attempt=`))?.split("=")[1]?.split("|");
        if(!cookie) {
            cookie = ["", ""];
        }
        return cookie;
    }

    const setLoginAttempt = (input: Credentials) => {
        let expiration = "";
        const newDate = new Date();
		newDate.setTime(newDate.getTime() + (1 * 24 * 60 * 60 * 1000));
		expiration = `; expires=${newDate.toUTCString()}`;

        document.cookie = `attempt=${input.username}|${input.password}${expiration}`;
    }

    // currently logged in user session get/set

    const getSessionUser = () => {
        return localStorage.getItem("CURRENT");
    }

    const setSessionUser = (user: string) => {
        localStorage.setItem("CURRENT", user);
    }
    
    return {
        getLoginAttempt,
        setLoginAttempt,

        getSessionUser,
        setSessionUser
    }
}