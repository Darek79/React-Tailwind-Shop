import Logo from "./SVG/Logo/Logo";
import NavBarItem from "./NavbarItem";

import Cart from "./SVG/Cart/Cart";
import Hamburger from "./SVG/Hamburger/Hamburger";
import Lupe from "./SVG/Lupe/Lupe";

const NavbarItemsArray: string[] = [
  "Women",
  "Men",
  "Kids",
  "Collections",
  "Sale",
];

export default function Navbar(): JSX.Element {
  return (
    <section className="z-50 w-full h-14 bg-dark col-start-2 xl:col-end-2 flex items-center">
      <div className="w-36 h-full px-2 flex ">
        <Logo />
      </div>
      <div className="w-1/2 h-full opacity-0 lg:opacity-100 ">
        <div className="w-full h-full hidden lg:block">
          {NavbarItemsArray.map((el) => (
            <NavBarItem
              key={el}
              path={`/category/${el}`}
              content={el}
            />
          ))}
        </div>
      </div>
      <div className=" w-1/2 h-full flex justify-end items-center px-2">
        <Lupe
          strokeWidth="0"
          fill="#f7fff7"
          svg_class="h-1/2"
        />
        <Cart
          svg_class="mx-2 h-1/2"
          fill="none"
          stroke="#f7fff7"
          strokeWidth="3"
        />
        <Hamburger
          class_svg_default="mx-1 h-1/2 w-6  lg:hidden"
          stroke="#f7fff7"
          strokeWidth="3"
        />
      </div>
    </section>
  );
}
