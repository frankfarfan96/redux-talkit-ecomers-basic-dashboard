import {Outlet} from "react-router-dom";
import NavbarPanel from "./NavbarPanel";

const RootLayout = () => {
    return(
        <>
            <NavbarPanel />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout;