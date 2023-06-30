import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="navBar">
                <h1>My book blog</h1>
                <button>Home</button>
                <button onClick={() => navigate('/create')}>Create new book</button>
            </div>
        </>
    )
}

export default Navbar;