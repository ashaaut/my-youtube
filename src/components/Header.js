import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../redux/searchSlice";
const Header = () => {
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const suggestedData = await data.json();
    setSuggestions(suggestedData[1]);

    dispatch(
      cacheResults({
        [searchQuery]: suggestedData[1],
      })
    );
  };
  const toggleSideBar = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg items-center">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
          alt="humBurger_menu"
          onClick={() => toggleSideBar()}
        ></img>
        <img
          className="h-8 mx-2"
          alt="youtube_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
        ></img>
      </div>
      <div className=" col-span-10   justify-center">
        <div className="flex w-full  justify-center ">
          <input
            className="border border-gray-300 rounded-l-full p-2 w-1/2  "
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          ></input>
          <button className="border border-gray-300  px-6 py-2 bg-gray-100 rounded-r-full">
            🔍
          </button>
          <img
            className="h-12  rounded-full p-3 bg-gray-100 mx-2"
            alt="mike"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3gMgzJuzPVhI7PKimRh2Qj9zVnY-HNHjsvmK3ITW9_m3JoV4F863dksQAU9OBqo7lkmg&usqp=CAU"
          ></img>
        </div>
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute bg-white w-[30rem] px-5 py-2 mx-44 rounded-xl my-2 shadow-lg border border-gray-200">
            <ul>
              {suggestions.map((suggestion) => (
                <li key={suggestion} className=" py-2 hover:bg-gray-100">
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 flex justify-between">
        <button className="bg-gray-300 rounded-full p-2 w-32">＋ Create</button>
        <img
          className="h-8"
          alt="notification_icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPvhcZWgPjwIkb80zgY6f900WCdj6TQZv-w&s"
        ></img>
        <img
          className="h-8"
          alt="user_icon"
          src="https://www.svgrepo.com/show/350417/user-circle.svg"
        ></img>
      </div>
    </div>
  );
};

export default Header;
