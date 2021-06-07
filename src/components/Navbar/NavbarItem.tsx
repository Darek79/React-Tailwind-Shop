import React, {
  useState,
  memo,
  useRef,
  ReactEventHandler,
  useEffect,
} from "react";
import {NavLink} from "react-router-dom";
import {Generic} from "./../../Interfaces/Interfaces";

export default function NavBarItem({
  path = "",
  content,
}: Generic): JSX.Element {
  return (
    <NavLink to={path}>
      <div className="px-2 h-full inline-block">
        <div className="w-full h-14 bg-dark group transition flex">
          <p className="text-xs tracking-wide text-light px-2 m-auto">
            {content}
          </p>
          <div className="w-full h-60 -top-60 right-0 bg-red-200 transition delay-500 duration-300 transform-gpu group-hover:block group-hover:opacity-100 group-hover:translate-y-74 group-hover:z-10 -z-10 absolute">
            {content}
          </div>
        </div>
      </div>
    </NavLink>
  );
}
