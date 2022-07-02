import React from "react";
import { Product } from "../Product/Product";
import { useDispatch ,useSelector} from "react-redux";


export default function Home() {
  const dispatch = useDispatch();
  const { booksData, } = useSelector((state) => ({
    booksData: state.user.booksData,
    
  }));

  React.useEffect(() => {
    dispatch({ type: "GET_BOOKS" });
  }, [booksData]);
  return (
    <>
 
      <Product />
    </>
  );
}
