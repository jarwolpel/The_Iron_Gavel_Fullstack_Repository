import { Outlet } from "react-router-dom";
import { Nav } from "./nav/Nav";

export function Layout() {
    return (
        <>
            <Nav/>
            <Outlet/>
            {/* <Footer /  */}
        </>
    )
}