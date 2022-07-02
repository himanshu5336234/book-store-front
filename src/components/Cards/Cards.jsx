import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Cards.css";
export const Cards = (props) => {
  const { _id, Name, Publish, description, Price, preview } = props.data;
  const dispatch =useDispatch()
const deleteBook =(id)=>{
 dispatch({type:"REMOVE_BOOK",payload:id})
}
  return (
    <div className="cards">
        <span onClick={()=>deleteBook(_id)} className="close">X</span>
      <div>
        <h4>Name: {Name}</h4>
        <h5 className="gray-text">
          Publish: {new Date(Publish).toLocaleString()}
        </h5>
        <span className="blue-text">Rs {Price}</span>
      </div>
    </div>
  );
};
