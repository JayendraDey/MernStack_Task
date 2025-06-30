import React, { useCallback, useEffect, useState } from "react";
import "./NavCountry.css";

export const NavCountry = ({ setTakeCountryIndx ,setOpenCloseCountryList }) => {
  const [contryList, setContryList] = useState();
  const [viewCountryList, setViewCountryList] = useState();

  useEffect(() => {
    try {
      fetch("https://restcountries.com/v3.1/all/")
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setContryList(data);
          setViewCountryList(data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleInput = (e) => {
    let key1 = e.target.value.toLowerCase();

    let countryll = contryList;

    const countrySearch = contryList.filter((item) => {
      return item.name.common.toLowerCase().includes(key1);
    });

    setViewCountryList(countrySearch);

    console.log(viewCountryList);
  };

  return (
    <div>
      <div className="nav-select"> 
        <div className="dropDown-inp">
          <input type="text" name="" onChange={handleInput} id="" />
        </div>
        <div className="categoryList">
          {viewCountryList?.map((data, indx) => {
            return (
              <ul>
                <li
                  onClick={() => {
                    return (
                      setTakeCountryIndx(data.name.common),
                      setOpenCloseCountryList(false)
                    )
                  }}
                  title={data.name.common}
                >
                  {data.name.common}  
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};
