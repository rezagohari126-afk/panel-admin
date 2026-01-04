import React, { useState , useEffect , } from "react";
import { LuUsersRound } from "react-icons/lu";
import {
  MdOutlineProductionQuantityLimits,
  MdSpaceDashboard,
} from "react-icons/md";
import { FaShopify } from "react-icons/fa";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { Link } from "react-router";
import { IoChevronBack } from "react-icons/io5";
import { useLocation } from "react-router";

export default function SideBar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  
   useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [location.pathname]);


  return (
    <>
      <div
        className={`fixed left-0 top-0 z-50 h-full bg-white shadow transition-all duration-300
      ${open ? "w-57.5" : "w-17.5"}`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="absolute top-1/2 -right-4 w-8 h-8 bg-blue-600 text-white
        rounded-full flex items-center justify-center shadow-md
        hover:bg-blue-700 transition"
        >
          <IoChevronBack
            className={`transition-transform duration-300 ${
              open ? "rotate-0" : "rotate-180"
            }`}
          />
        </button>

        {/* Header */}

        <div className="flex justify-center items-center flex-col">
          <h1
            className={`
                  relative text-2xl mt-6 font-bold
                  transition-all duration-300
                  text-left
                 ${open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"}
                   `}
          >
            Dashboard
            <span
              className={`
                 absolute left-0.75 -bottom-1 h-1 bg-blue-500 rounded-lg
                 transition-all duration-300
                 ${open ? "w-15 opacity-100" : "w-0 opacity-0"}
                 `}
            />
          </h1>

          {open && <span className="w-42.5 h-px bg-slate-300 mt-6"></span>}
        </div>

        {/* Menu */}
        <div className="mt-8 flex justify-center">
          <ul className="flex flex-col gap-6 w-full px-2">
            <SideItem
              open={open}
              to="/"
              icon={<MdSpaceDashboard />}
              label="Dashboard"
            />
            <SideItem
              open={open}
              to="/users"
              icon={<LuUsersRound />}
              label="Users"
            />
            <SideItem
              open={open}
              to="/products"
              icon={<MdOutlineProductionQuantityLimits />}
              label="Products"
            />
            <SideItem
              open={open}
              to="/sales"
              icon={<FaShopify />}
              label="Sales"
            />
            <SideItem
              open={open}
              to="/orders"
              icon={<RiShoppingBasket2Line />}
              label="Orders"
            />
          </ul>
        </div>
      </div>

      {/* Backdrop Sidebar */}

      {open && (
        <div className="fixed top-0 left-0 z-40 bg-[rgba(0,0,0,10%)] backdrop-blur-md w-full h-full"></div>
      )}
    </>
  );
}

/* Menu Item Component */

function SideItem({ open, icon, label, to }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 text-slate-500 text-lg px-2 py-2
      rounded-lg hover:bg-sky-100 hover:text-blue-600 transition"
    >
      <span className="text-xl">{icon}</span>
      <span
        className={`transition-all duration-300 ${
          open ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
        }`}
      >
        {label}
      </span>
    </Link>
  );
}
