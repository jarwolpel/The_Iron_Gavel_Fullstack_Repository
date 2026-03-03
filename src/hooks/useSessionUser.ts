export function useSessionUser() {
    // currently logged in user session get/set

    const getSessionUser = () => {
        let user = localStorage.getItem("CURRENT");
        if (!user) {
            user = "Login";
        }

        return user;
    }

    const setSessionUser = (user: string | undefined) => {
        if(!user){
            localStorage.setItem("CURRENT", "Login");
        } else {
            localStorage.setItem("CURRENT", user);
        }
    }
    
    return {
        getSessionUser,
        setSessionUser
    }
}