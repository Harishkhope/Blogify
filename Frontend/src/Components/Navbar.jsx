import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useContext, useState } from "react";
import Menu from "./Menu";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const [prompt, setPrompt] = useState("");
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const path = useLocation().pathname
  const showMenu = () => {
    setMenu(!menu);
  };

  const { user } = useContext(UserContext);

  // Function to handle search as the user types
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setPrompt(searchTerm);
    // Perform the search as the user types
    navigate(searchTerm ? `?search=${searchTerm}` : "/");
  };

  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
      <h1 className="text-2xl md:text-4xl font-extrabold mx-4">
        <Link to="/">Blogify</Link>
      </h1>
      {path==="/" && <div className="flex justify-center items-center space-x-0 border-2 border-rose-600 rounded-lg p-2">
        <p>
          <BsSearch />
        </p>
        <input
          onChange={handleSearch}
          value={prompt}
          className="outline-none px-3"
          placeholder="Search a post"
          type="text"
        />
      </div>}
      <div className="hidden md:flex items-center justify-center mx-2 space-x-2 md:space-x-4">
        {user ? (
          <h3>
            <Link to="/write">Write </Link>
          </h3>
        ) : (
          <h3>
            <Link to="/login">Login</Link>
          </h3>
        )}
        {user ? (
          <div onClick={showMenu}>
            <p className="cursor-pointer relative" style={{ userSelect: 'none' }}>
              {menu ? <RxCross1 /> : <FaBars />}
            </p>
            {menu && <Menu />}
          </div>
        ) : (
          <h3>
            {" "}
            <Link to="/register">Register</Link>{" "}
          </h3>
        )}
      </div>
      <div onClick={showMenu} className="md:hidden mx-2 text-2xl relative">
        {menu ? <RxCross1 /> : <FaBars />}
        {menu && <Menu />}
      </div>
    </div>
  );
};

export default Navbar;
