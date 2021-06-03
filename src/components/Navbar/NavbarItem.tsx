import {useState} from "react";
import {NavLink} from "react-router-dom";
import {Generic} from "./../../Interfaces/Interfaces";
// import {
//   useAppSelector,
//   useAppDispatch,
// } from "./../../redux/hooks";
// import {openModal} from "./../../redux/reducers/navbarReducder";
export default function NavBarItem({
  parent_style = "",
  child_style = "",
  path = "",
  content,
  fnClick,
  state,
}: Generic): JSX.Element {
  const [open, setOpen] = useState(false);

  function modalOpen() {
    setOpen(true);
  }
  return (
    <div className={parent_style}>
      <NavLink exact to={path}>
        <span className={child_style}>{content}</span>
      </NavLink>
      {console.log(open)}
      <p className="text-light" onClick={modalOpen}>
        test
      </p>
    </div>
  );
}
