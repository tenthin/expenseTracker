import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [Open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `py-3 px-10 rounded transition block text-xl
     ${
       isActive ? "bg-blue-500 text-black" : "text-gray-100 hover:bg-blue-300"
     }`;

  return (
    <>
      <div className="md:hidden flex items-center justify-between p-4">
        <button onClick={() => setOpen(true)} className="text-white text-2xl">
          ☰
        </button>
      </div>
      {Open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-[260px] bg-gray-900 z-50 transform transition-transform duration-300 ${Open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-white text-2xl md:hidden"
          >
            ✕
          </button>
        </div>
        <div className="p-6 flex flex-col items-center relative">
          <img
            src=""
            alt="Tenzin"
            className="rounded-full bg-white h-[80px] w-[80px]"
          />
          <p className="mt-3 text-white text-2xl">Tenzin</p>
          <div className="mt-[100px]">
            <ul className="flex flex-col gap-6">
              <li>
                <NavLink to="/" end className={navLinkClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/expenses" className={navLinkClass}>
                  Expenses
                </NavLink>
              </li>
              <li>
                <NavLink to="/trips" className={navLinkClass}>
                  Trips
                </NavLink>
              </li>
              <li>
                <NavLink to="/approvals" className={navLinkClass}>
                  Approvals
                </NavLink>
              </li>
              <li>
                <NavLink to="/settings" className={navLinkClass}>
                  Settings
                </NavLink>
              </li>
              <li>
                <NavLink to="/support" className={navLinkClass}>
                  Support
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
