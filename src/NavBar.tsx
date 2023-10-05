import { Link } from "react-router-dom";
import "./index.css";
import Logo from "./assets/pngwing.com.png";

import './App.css'
import Resumepopup from "./Resumepopup";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleClickOpen = () => {
    setOpen(true)
  };

  return (
    <>
      <div
        className="nav-bar"
      >
        <Link
          to="/"
          className="nav-logo"
        >
          <img src={Logo} height={"40px"} width={"40px"} alt="Logo" />
        </Link>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Link
            to="/"
            className="nav-link"
          >
            Home
          </Link>
          <Link
            to="About"
            className="nav-link"

          >
            About
          </Link>
          <Link
            to="Projects"
            className="nav-link"
          >
            Projects
          </Link>
          <Link
            to="Contact"
            className="nav-link"
          >
            Contact
          </Link>
          <button
            type="button"
            className="btn btn-outline-info nav-button"

            onClick={handleClickOpen}
          >
            Resume
          </button>
        </div>
      </div>
      <Resumepopup open={open} setOpen={setOpen} />
    </>

  );
};

export default NavBar;
