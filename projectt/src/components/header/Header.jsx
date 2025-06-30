import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import "./Header.css";
import { NavSelect } from './NavSelect';
import { TbGitCompare } from "react-icons/tb";
import { GiSelfLove } from "react-icons/gi";
import { IoCartSharp } from "react-icons/io5";
import { RiAccountCircleFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Header = () => {
  const cartItems = useSelector((state) => state.addCart);

  const [openNavCategory, setOpenNavCategory] = useState(false);
  const [displayCategoryName, setDisplayCategoryName] = useState("All");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [openCountryList, setOpenCountryList] = useState(false);

  useEffect(() => {
    const cached = localStorage.getItem("countryList");
    if (cached) {
      setCountries(JSON.parse(cached));
    } else {
      fetch("https://countriesnow.space/api/v0.1/countries/")
        .then((res) => res.json())
        .then((data) => {
          setCountries(data.data);
          localStorage.setItem("countryList", JSON.stringify(data.data));
        })
        .catch((error) => console.log("Error fetching countries:", error));
    }
  }, []);

  return (
    <div className='nav-container'>
      {/* Logo */}
      <div className='nav-logo'>
        <NavLink style={{ textDecoration: "none" }} to={"/"}>
          <p>e.com</p>
        </NavLink>
      </div>

      {/* Search */}
      <div className='navSerach-container'>
        <div className='nav-allCategories'>
          <p>{displayCategoryName}</p>
          <NavSelect openNavCtagory={openNavCategory} setDisplayCategoryName={setDisplayCategoryName} setOpenNavCtagory={setOpenNavCategory} />
          <MdKeyboardArrowDown
            style={{ fontSize: "25px", cursor: "pointer", backgroundColor: "#a7a7a7" }}
            onClick={() => setOpenNavCategory(!openNavCategory)}
          />
        </div>
        <div className='nav-search'>
          <input type="text" />
        </div>
        <div className='serach-icon'>
          <FaSearch style={{ fontSize: "20px" }} />
        </div>
      </div>

      {/* Country */}
      <div className='nav-country-container'>
        <p>{selectedCountry.toUpperCase()}</p>
        <MdKeyboardArrowDown
          style={{ fontSize: "25px", cursor: "pointer", backgroundColor: "#a7a7a7" }}
          onClick={() => setOpenCountryList(!openCountryList)}
        />

        {openCountryList && (
          <div className="country-dropdown">
            {countries.map((item, index) => (
              <div
                key={index}
                style={{ padding: "5px 10px", cursor: "pointer", borderBottom: "1px solid #ddd" }}
                onClick={() => {
                  setSelectedCountry(item.country);
                  setOpenCountryList(false);
                }}
              >
                {item.country}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className='buttons'>
        <div className="use-btn">
          <TbGitCompare style={{ fontSize: "23px", color: "#ea00ff" }} />
          <p>Compare</p>
        </div>
        <div className="use-btn">
          <GiSelfLove style={{ fontSize: "23px", color: "#ea00ff" }} />
          <p>WishList</p>
        </div>
        <div className="use-btn">
          <NavLink to={'/cart'} style={{ display: "flex", textDecoration: "none", color: "white", justifyContent: "center", alignItems: "center" }}>
            <IoCartSharp style={{ fontSize: "23px", color: "#ea00ff" }} />
            <p style={{ backgroundColor: "red", fontSize: "10px", marginLeft: "5px" }}>{cartItems?.length || 0}</p>
            <p>Cart</p>
          </NavLink>
        </div>
        <div className="use-btn">
          <RiAccountCircleFill style={{ fontSize: "39px", color: "#ea00ff" }} />
          <p>Account</p>
        </div>
      </div>
    </div>
  );
};
