import { useState } from "react";

export function setLoggedInUser(name?: string): string {
    const [loggedInUser, setUser] = useState<string>("Login");

    if (name) {
        setUser(name);
    }
    
    return loggedInUser;
}