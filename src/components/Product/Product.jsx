import React from "react";
import { Cards } from "../Cards/Cards";
import { useSelector } from "react-redux";
import "./products.css";

export const Product = (Props) => {
  const [product,setProduct]=React.useState([])
  const { booksData, } = useSelector((state) => ({
    booksData: state.user.booksData,
    
  }));


  return (
    <>
      <div className="Products">
  

        <div className="Product-wrapper">
          {booksData.length > 0? 
            booksData.map((item, index) => (
              <Cards key={index.toString()} data={item} />
            )):<h1>No book found</h1>
          
          }
        </div>
      </div>
    </>
  );
};
