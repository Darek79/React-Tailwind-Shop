import DivWrapper from "../Generic/DIVWrapper";
import Logo from "./SVG/Logo/Logo";
import NavBarItem from "./NavbarItem";
import {NavLink} from "react-router-dom";
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
    <aside className="w-full h-14 bg-dark row-start-1 flex items-center">
      <div className="w-36 min-w-100 h-full px-2 flex ">
        <Logo />
      </div>
      <div className="w-1/2 h-full opacity-0 lg:opacity-100 ">
        <div className="w-full h-full hidden lg:block">
          {NavbarItemsArray.map((el) => (
            <NavBarItem
              key={el}
              path={`/${el}`}
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
    </aside>
  );
}
{
  /* <section className="w-full h-14 bg-dark row-start-1">
  <div className="w-40 h-full inline-block px-2">
    <Logo />
  </div>
  <div className="px-2 h-full inline-block">
    <div className="w-full h-14 bg-dark group transition flex">
      <p className="text-md text-light px-2 m-auto">1</p>
      <div className="w-full h-60 -top-60 right-0 bg-red-200 transition delay-500 duration-300 transform-gpu group-hover:block group-hover:opacity-100 group-hover:translate-y-74 group-hover:z-10 -z-10 absolute">
        1
      </div>
    </div>
  </div>
  <div className="inline-block w-auto h-full">
    <div className="w-full h-full">
      <p className="text-md text-light px-2 m-auto">test</p>
    </div>
  </div>
</section>; */
}
