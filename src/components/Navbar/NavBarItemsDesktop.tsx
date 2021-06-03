import NavBarItems from "./../Generic/GenericWrapper";
import NavBarItem from "./NavbarItem";
import {Generic} from "./../../Interfaces/Interfaces";
import {NavbarItemsArray} from "./../../SiteDefaults/NavbarItems";
// import {
//   useAppSelector,
//   useAppDispatch,
// } from "./../../redux/hooks";
// import {openModal} from "./../../redux/reducers/navbarReducder";

export default function NavBarItemsDesktop({
  parent_style,
  child_style,
}: Generic): JSX.Element {
  return (
    <NavBarItems
      parent_style={parent_style}
      child_style={child_style}
    >
      {NavbarItemsArray.map((el) => (
        <NavBarItem
          key={el}
          parent_style="text-center px-2"
          child_style="tracking-wider text-light"
          path={`/${el}`}
          content={el}
        />
      ))}
    </NavBarItems>
  );
}
