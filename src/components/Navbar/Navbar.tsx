import NavbarWrapper from "./../Generic/GenericWrapper";
import Logo from "./../SVG/Logo/Logo";
import NavBarItemsDesktop from "./NavBarItemsDesktop";
export default function Navbar(): JSX.Element {
  return (
    <NavbarWrapper
      parent_style="h-14 bg-dark row-start-1 col-start-2"
      child_style="flex items-center"
    >
      <Logo wrapper_class="h-full w-36 px-2 flex" />
      <NavBarItemsDesktop
        parent_style="w-2/5 h-full bg-dark items-center"
        child_style="flex justify-center"
      />
      <div>test</div>
    </NavbarWrapper>
  );
}
