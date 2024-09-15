import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeStore } from "./ThemeContext";
import { addCart } from "../Store/CartSlice";
import { useDispatch } from "react-redux";

const Card = ({ productObj }) => {
  let dispatch = useDispatch();

  let { title, category, price, thumbnail, rating, id } = productObj;

  let { theme } = useContext(ThemeStore);

  let navigate = useNavigate();

  let handleNevigation = () => {
    navigate(`/product/${id}`);
  };

  let handleAddCart = (event) => {
    event.stopPropagation();
    dispatch(addCart(productObj))

  };

  let lightTheme = "card bg-slate-100 w-96 shadow-xl rounded-xl m-4 text-black";
  let darkTheme = "card bg-slate-600 w-96 shadow-xl rounded-xl m-4 ";

  return (
    <div
      className={theme == "light" ? lightTheme : darkTheme}
      onClick={handleNevigation}
    >
      <figure>
        <img
          className={theme == "light" ? lightTheme : darkTheme}
          src={thumbnail}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
        <p>category:-{category}</p>
        <p className="text-xl">₹{price}</p>
        <p>rating:-{rating}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleAddCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
