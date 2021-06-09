import {NavLink} from "react-router-dom";
import {NavLinkI} from "./../../Interfaces/Interfaces";
import CSS from "csstype";
interface ButtonI extends NavLinkI {
  buttonClass: string;
  buttonText?: string;
}

const buttonStyling: CSS.Properties = {
  width: "40%",
  marginTop: "1rem",
  backgroundColor: "#0f181a",
  padding: "0.35rem 0.5rem",
  textAlign: "center",
  borderRadius: "1rem",
  color: "#f7fff7",
  fontWeight: "bold",
  letterSpacing: "1.5px",
};

export default function Button({
  path = "",
  buttonClass,
  buttonText,
}: ButtonI) {
  return (
    <NavLink activeStyle={buttonStyling} to={path}>
      <p className={buttonClass}>{buttonText}</p>
    </NavLink>
  );
}
