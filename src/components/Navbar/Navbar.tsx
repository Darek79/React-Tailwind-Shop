import NavbarWrapper from "./../Generic/GenericWrapper";
import Logo from "./../SVG/Logo/Logo";
import NavBarItem from "./NavBarItemsDesktop";
export default function Navbar(): JSX.Element {
  return (
    <NavbarWrapper
      default_style="h-20 bg-dark row-start-1 col-start-2"
      custom_style="flex"
    >
      <Logo wrapper_class="h-20 w-40 lg:w-52" />
      <NavBarItem />
    </NavbarWrapper>
  );
}
