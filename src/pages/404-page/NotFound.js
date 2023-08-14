import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
// import ScrollToTop from "react-scroll-to-top";


function NotFound() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])
    return (
        <div className="joinOuterContainer">
            <Header />
            <h1 style={{ color: "white" }}>404 - Page Not Found</h1>
            {/* <ScrollToTop smooth /> */}
        </div>
    )
}

export default NotFound