import {useState} from "react";
import {SVG} from "./../../../../Interfaces/Interfaces";
import ClosingX from "./../ClosingX/ClosingX";
import {ModalOpener} from "./../../../../Hooks/ModalOpener";
import SideBar from "./../../Sidebar/SidebarGeneric";
export default function Lupe({
  strokeWidth,
  fill = "#707070",
  stroke = "#f7fff7",
  line_class,
  svg_class,
}: SVG): JSX.Element {
  const [open, modalAction] = ModalOpener();
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-3 -2 45.605 45.415"
        className={svg_class}
        strokeWidth={strokeWidth}
        onClick={modalAction}
      >
        <path
          stroke={stroke}
          strokeLinecap="round"
          strokeWidth="4"
          d="M35.778 35.589l-14.24-13.391"
          className={line_class}
        />
        <g fill="none">
          <path
            stroke={stroke}
            strokeWidth={strokeWidth}
            d="M13.5 0A13.5 13.5 0 110 13.5 13.5 13.5 0 0113.5 0z"
          />
          <path
            stroke={stroke}
            fill={fill}
            strokeWidth={strokeWidth}
            d="M13.5 4C8.2617 4 4 8.2617 4 13.5S8.2617 23 13.5 23s9.5-4.2617 9.5-9.5S18.7383 4 13.5 4m0-4C20.9558 0 27 6.0442 27 13.5S20.9558 27 13.5 27 0 20.9558 0 13.5 6.0442 0 13.5 0z"
            className={line_class}
          />
        </g>
      </svg>
      <SideBar fnClick={modalAction} state={open} />
      {/* <div className="absolute top-0 right-0 bg-light h-screen w-full">
        <div className="w-full flex justify-end pr-2 pt-2">
          <ClosingX
            svg_class="w-8 h-8"
            strokeWidth="3"
            stroke="#0f181a"
          />
        </div>
        test
      </div> */}
    </>
  );
}
