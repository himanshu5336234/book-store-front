import { Link } from "react-router-dom";
import React from "react";
import "./Topbar.css";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";

const Topbar = () => {
  const [searchData, setSearchData] = React.useState("");
  const dispatch = useDispatch();

  const searchHandleChange = () => {
    dispatch({ type: "SEARCH_PRODUCT", payload: searchData });
  };

  const logout = () => {
    localStorage.setItem("Token", "");
    window.location.pathname = "/";
  };

  return (
    <div className="nav-bar">
      <header>
        <div id="logo">
          <h1>
            <Link to="/">
              <span className="blue-text">SHOP</span>LANE
            </Link>
          </h1>
        </div>
        <nav>
          <Link to="/author">Add author</Link>
        </nav>
        {/* <div id="DehazeIcon" onClick={() => setNavbar(!Navbar)}>
     <DehazeIcon />
   </div> */}

        <div id="link">
          <div className="search-wrapper">
            <input
              type="text"
              onChange={(e) => setSearchData(e.target.value)}
            />
            <span onClick={searchHandleChange}>
              <SearchIcon />
            </span>
          </div>
          <div onClick={() => logout()}>
            <h3>logout</h3>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Topbar;
