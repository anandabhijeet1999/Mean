
import React from "react";
import CartRow from "./CartRow";
import { useSelector , useDispatch } from "react-redux";
import { clearCart , AscendingRating , DesecndingRating } from "../Store/CartSlice";
import arrow from "../assets/arrow.webp";
import up from "../assets/up.png";
const Cart = () => {

  let carData = useSelector((store)=> store.cart.cart )
  let dispatch = useDispatch();
  return (
    <div className="overflow-x-auto ml-10 bg-white">
      <table className="table">
      
        <thead>
          <tr className="text-2xl">
            <th> Image </th>
            <th> <span onClick={()=> { dispatch(AscendingRating())}}><img  src={up}/></span> Rating <span onClick={()=> { dispatch(DesecndingRating())}}><img src={arrow}  /> </span></th>
            <th>Price </th>
            <th>Quantity </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
         {
          carData.map((cartObj)=> <CartRow obj={cartObj}></CartRow>)
         }
         
        </tbody>
      </table>
      <button className="btn btn-block btn-outline btn-error" onClick={()=> dispatch(clearCart())}> Clear Cart </button>
    </div>
  );
};

export default Cart;
