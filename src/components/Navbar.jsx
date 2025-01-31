import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faBookmark, faHeart, faSearch} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className="bg-stone-950 flex flex-col text-red-400 items-center justify-center">
      <div className="h-16 w-4/5 flex flex-row items-center justify-between">
        <FontAwesomeIcon className=" hidden  justify-self-start max-sm:flex" onClick={() => setIsMenuOpen(!isMenuOpen)} icon={faBars} />
        <div className="basis-1/3 max-sm:basis-2/3 flex ">
          <NavLink to="/">
            Movie 101
          </NavLink>
        </div>
        <div className="basis-2/3 flex max-sm:hidden justify-end">
          <NavLink to="/watchlist" className='mx-3'>
          <FontAwesomeIcon className="mr-1"  icon={faBookmark} />Watchlist
          </NavLink>
          <NavLink className='mx-3' to="/favorite" ><FontAwesomeIcon className="mr-1"  icon={faHeart} />Favourite</NavLink>
          <button className='ml-3 btn text-white px-2 rounded-md'><FontAwesomeIcon icon={faSearch}  className=''/></button>
        </div>
      </div>
      <div className={`${isMenuOpen ? "flex" : "hidden"} md:hidden lg:hidden w-4/5 flex-col text-sm pb-2 justify-start`}>
        <NavLink onClick={() => setIsMenuOpen(!isMenuOpen)} to="/watchlist">My Watchlist</NavLink>
        <NavLink onClick={() => setIsMenuOpen(!isMenuOpen)} to="/favorite" >Favourite</NavLink>
        <div>Search</div>
      </div>
      {/* <div className="w-4/5 mb-2 flex justify-between">
        <input className='btn w-full h-12 bg-white text-white px-2 rounded-md text-xl' placeholder="Type to Search Movie ..." />
      </div> */}
    </div>
  );
}
