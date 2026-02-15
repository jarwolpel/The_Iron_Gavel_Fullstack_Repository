import { Outlet } from "react-router-dom";
import { Nav } from "./nav/Nav";
import { setLoggedInUser } from "../../../hooks/setLoggedInUser";
export function Layout(
) {
    return (
        <>
            <Nav/>
                <main>
                    <Outlet/>
                </main>
            {/* <Footer /  */}
        </>
    )
}