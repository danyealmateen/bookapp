import { useNavigate } from "react-router-dom";
import React from "react";
import "./Navbar.css"

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1 className="title">My bookshelf</h1>
            <div className="navBar">
                <div className="btns">
                    <button onClick={() => navigate('/create')}>Create new book</button>
                </div>
            </div>
        </>
    )
}

export default Navbar;