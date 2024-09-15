import React, { useEffect, useState, useContext } from "react";
import ShimmerUI from "./ShimmerUI.jsx";
import Cart from "./Card.jsx";
import { Link } from "react-router-dom";
import { ThemeStore } from "./ThemeContext";
import Crosol from "./Crosol.jsx";
function Home() {
  const [allproducts, setallproducts] = useState(null);
  const [products, setproducts] = useState(null);
  const [query, setquery] = useState("");
  const { theme, setTheme } = useContext(ThemeStore);

  const handleTopRated = () => {
    const filterData = allproducts.filter((obj) => {
      return obj.rating > 4;
    });
    setproducts(filterData);
  };

  const handleCatgori = (category) => {
    const filterData = allproducts.filter((obj) => {
      return obj.category == category;
    });
    setproducts(filterData);
  };

  const handleSearch = () => {
    const filterData = allproducts.filter((obj) => {
      return obj.title.toLowerCase().includes(query.toLowerCase().trim());
    });
    setproducts(filterData);
    setquery("");
  };

  const getdata = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const productData = await data.json();
    setallproducts(productData.products);
    setproducts(productData.products);
  };
  useEffect(() => {
    getdata();
  }, []);

  if (allproducts == null) {
    return <ShimmerUI></ShimmerUI>;
  }

  return (
    <>
      <div className={theme == "light" ? "bg-white" : "bg-slate-700"}>
        <div className="flex justify-around items-center ">
          <button onClick={handleTopRated} className="btn btn-accent">
            Top Rating
          </button>
          <button
            onClick={() => {
              handleCatgori("groceries");
            }}
            className="btn btn-primary"
          >
            Grocery
          </button>
          <button
            onClick={() => {
              handleCatgori("beauty");
            }}
            className="btn btn-secondary"
          >
            Beauty
          </button>
          <div className="search flex justify-around items-center">
            <input
              value={query}
              onChange={(e) => {
                setquery(e.target.value);
              }}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <button onClick={handleSearch} className="btn btn-secondary m-2">
              Search
            </button>
          </div>
          <button
            onClick={() => {
              handleCatgori("smartphones");
            }}
            className="btn btn-accent"
          >
            Electronics
          </button>
          <button
            onClick={() => {
              handleCatgori("furniture");
            }}
            className="btn btn-ghost"
          >
            Furniture
          </button>
          <button
            onClick={() => {
              handleCatgori("mobile-accessories");
            }}
            className="btn btn-secondary"
          >
            Mobiles
          </button>
        </div>
        <Crosol></Crosol>
        <div className="flex flex-wrap justify-around">
          {products.map((obj) => {
            return <Cart productObj={obj} key={obj.id}></Cart>;
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
