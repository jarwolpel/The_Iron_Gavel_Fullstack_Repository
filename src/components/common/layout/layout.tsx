import { Outlet } from "react-router-dom";
import { Nav } from "./nav/Nav";
import type { Credentials } from "../../../types/userCredentials";

export function Layout(
    {
        loggedInUser
    }: {
        loggedInUser: Credentials
    }
) {
    return (
        <>
            <Nav
            loggedInUser={loggedInUser}/>
                <main>
                    <Outlet/>
                </main>
            {/* <Footer /  */}
        </>
    )
}