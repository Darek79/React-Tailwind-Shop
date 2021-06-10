import {NavLink} from "react-router-dom";
import {NavLinkI} from "./../../Interfaces/Interfaces";
interface ButtonI extends NavLinkI {
  textClass?: string;
  divClass?: string;
  buttonClass?: string;
  buttonText?: string;
}

const divClass1: string =
  "w-2/5 transform-gpu translate-all hover:bg-darkHover bg-dark rounded-full py-1 px-4 mt-2";

const textClass1: string =
  "text-lg w-full font-bold h-full text-light tracking-wide text-center";

export default function Button({
  divClass = divClass1,
  textClass = textClass1,
  path = "",
  buttonText,
}: ButtonI): JSX.Element {
  return (
    <div className={divClass}>
      <NavLink to={path}>
        <p className={textClass}>{buttonText}</p>
      </NavLink>
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
