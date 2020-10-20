import React from 'react'
import Nav from './Nav'
import { Link } from "react-router-dom"



const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-6">
                            <div className="logo"> <Link to="/">Covid</Link></div>
                        </div>
                        <div className="col-md-8 col-sm-6 col-6">
                            <Nav />
                        </div>
                    </div>
                </div>
            </header>
            <div className="spacer"></div>
        </>
    )
}

export default Header
