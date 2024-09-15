import React from "react";
import arrow from "../assets/arrow.webp";
const Comment = ({ review, setOpenIdx, openIdx, idx }) => {
  const { rating, comment, reviewerName } = review;

  return (
    <div className="my-2 ">
      <div className="w-3/4 mx-auto  h-10 bg-gray-400 text-black flex justify-around  items-center text-2xl ">
       
        <span>{reviewerName} </span>
        <span onClick={() => setOpenIdx(idx)}> <img src={arrow}  /> </span>
      </div>
      {openIdx == idx ? (
        <div className="w-3/4 mx-auto  h-10 bg-gray-500 text-black flex justify-around  items-center text-2xl ">
         
          <span> {comment} </span> <span> {rating} </span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Comment;