import { Outlet } from "react-router-dom"
import Header from "./header/Header"

const Layout = () => {
    return (
        <>
            <Header />
            <main className="container">
                <Outlet />
            </main>
            <Fooder />
        </>
    )
}

export default Layout