import React from "react";
import {NavLinkI} from "./../../Interfaces/Interfaces";
import {classes} from "./../../Utils/classesCreator";
interface ButtonI extends NavLinkI {
  textClass?: string;
  textClassCustom?: string;
  divClass?: string;
  customDivClass?: string;
  buttonClass?: string;
  buttonText?: string;
  fnClick?: () => void;
}

const divClass1: string =
  "transform-gpu translate-all hover:bg-darkHover bg-dark rounded-full";

const textClass1: string =
  "text-lg w-full font-bold h-full text-light tracking-wide text-center";

export default function Button({
  divClass = divClass1,
  customDivClass = "w-2/5 max-w-[10rem] py-1 px-4 mt-2",
  textClass = textClass1,
  path = "",
  buttonText = "Shop",
  fnClick,
}: ButtonI): JSX.Element {
  return (
    <div
      onClick={fnClick}
      className={classes([divClass, customDivClass])}
    >
      <p className={textClass}>{buttonText}</p>
    </div>
  );
}

// marginTop: "1rem",
// backgroundColor: "#0f181a",
// padding: "0.4rem 0.5rem",
// textAlign: "center",
// borderRadius: "1rem",
// color: "#f7fff7",
// fontWeight: "bold",
// letterSpacing: "1.5px",
// ":hover": {
//   backgroundColor: "#f7fff7",
// },
