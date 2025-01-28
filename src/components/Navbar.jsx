import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <div className="bg-stone-950 flex justify-center">
      <div className="h-16 w-4/5 flex flex-row text-red-400 items-center justify-between">
        <FontAwesomeIcon className=" hidden  justify-self-start max-sm:inline-flex " icon={faBars} />
        <div className="basis-1/3 flex ">
          <NavLink to="/">
            Movie 101
          </NavLink>
        </div>
        <div className="hidden max-sm:inline-flex"></div>
        <div className="basis-2/3 flex max-sm:hidden justify-end">
          <NavLink to="/watchlist" className='mx-3'>
            My Watchlist
          </NavLink>
          <NavLink to="/favorite" >Favourite</NavLink>
          <button className='ml-3 btn bg-red-400 text-white px-2 rounded-md'>Search</button>
        </div>
      </div>
    </div>
  );
}
