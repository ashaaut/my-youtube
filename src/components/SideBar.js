import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className=" shadow-lg w-62 p-5">
      <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
        <li className="py-1">Shorts</li>
        <li className="py-1">Subscriptions</li>
      </ul>
      <div className="border border-gray-200 my-1"></div>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li className="py-1">Music</li>
        <li className="py-1">Sports</li>
        <li className="py-1">Gaming</li>
        <li className="py-1">Movies</li>
      </ul>
      <div className="border border-gray-200 my-1"></div>

      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li className="py-1">Trending</li>
        <li className="py-1">Shopping</li>
        <li className="py-1">Music</li>
        <li className="py-1">Films</li>
        <li className="py-1">Live</li>
        <li className="py-1">Gaming</li>
        <li className="py-1">News</li>
        <li className="py-1">Sport</li>
        <li className="py-1">Courses</li>
        <li className="py-1">Fashion & Beauty</li>
        <li className="py-1">Podcasts</li>
      </ul>
      <div className="border border-gray-200 my-1"></div>
      <ul>
        <li className="py-1">Settings</li>
        <li className="py-1">Report History</li>
        <li className="py-1">Help</li>
        <li className="py-1">Send feedback</li>
      </ul>
    </div>
  );
};

export default SideBar;
