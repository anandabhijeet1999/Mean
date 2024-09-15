import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeStore } from "./ThemeContext";
import useProductData from "./useProductData";
import Comment from "./Comment";
import { useSelector } from "react-redux";

const ProductPage = () => {
  const them = useContext(ThemeStore);

  const { theme, setTheme } = useContext(ThemeStore);

  let inCart = ()=>{
    let idx = cartData.findIndex((cartObj)=>{
      return cartObj.data.id == id;
    })
   console.log( idx )
    if(idx === -1){
      return false ;
    }else{
      return true ;
    }
  }

  const { id } = useParams();
  const [openidx, setOpenIdx] = useState(null);

  const cartData = useSelector((store)=> store.cart.cart);

  let data = useProductData(id);

  if (data === null) {
    return <div className="skeleton h-dvh w-dvw "></div>;
  }

  const { thumbnail, title, category, description, rating, price, reviews } =
    data;

  let lightTheme = "navbar bg-white text-black text-2xl";
  let darkTheme = "navbar bg-gray-700 text-primary-content text-2xl";

  return (
    <div className="w-screen h-screen">
      { inCart()== true ? <div className="h-4 w-4 bg-red-700 rounded-full absolute z-30 m-10"></div>:null}
      <div className={theme == "light" ? lightTheme : darkTheme}>
        <figure>
          <img className="h-96 w-96" src={thumbnail} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Category:-{category}</p>
          <p>Description:-{description}</p>
          <p>Rating:- {rating}</p>
          <p> ₹{price}</p>

          {/* <p>Click the button to listen on Spotiwhy app.</p> */}
          <div className="card-actions justify-end">
            <button className="btn btn-Warning">ADD TO CART</button>
            <button className="btn btn-error">BUY NOW</button>
          </div>
        </div>
      </div>
      <div className=" h-80 w-1/2 bg-white mx-auto my-2">
        {reviews.map((review, idx) => {
          return (
            <Comment
              key={idx}
              review={review}
              openIdx={openidx}
              setOpenIdx={setOpenIdx}
              idx={idx}
            ></Comment>
          );
        })}
      </div>
    </div>
  );
};

export default ProductPage;
