import { Outlet } from "react-router-dom"
import Header from "./header/Header"
import Footer from "./footer/Footer"

const Layout = () => {
    return (
        <>
            <Header />
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout