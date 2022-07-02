import { Link } from "react-router-dom";
import React from "react";
import "./Topbar.css";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DehazeIcon from "@material-ui/icons/Dehaze";
import CloseIcon from "@material-ui/icons/Close";
const Topbar = () => {
  const [cartItem, setCartItem] = React.useState(0);
  const [Navbar, setNavbar] = React.useState(false);
  const [searchData, setSearchData] = React.useState("");
  const dispatch = useDispatch();
  const { CartData, ProductData } = useSelector((state) => ({
    CartData: state.user.CartData,
    ProductData: state.user.ProductData,
  }));

  const searchHandleChange = () => {
    dispatch({ type: "SEARCH_PRODUCT", payload: searchData });
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
       <input type="text" onChange={(e) => setSearchData(e.target.value)} />
       <span onClick={searchHandleChange}>
         <SearchIcon />
       </span>
     </div>
     <div>
       <AccountCircleIcon />
     </div>
    
   </div>
 </header>
    </div>

  );
};

export default Topbar;
