import {
  CompClasses,
  SVG,
} from "./../../../../Interfaces/Interfaces";
import SideBar from "./../../Sidebar/SidebarGeneric";
import {ModalOpener} from "./../../../../Hooks/ModalOpener";
type CompProps = SVG & CompClasses;

export default function Hamburger({
  strokeWidth,
  fill = "#707070",
  stroke = "#707070",
  class_svg_default,
  other_svg_classes = [" "],
  line_class,
  wrapper_class,
}: CompProps): JSX.Element {
  const [open, modalAction] = ModalOpener();
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // viewBox="2 0 30 30.298"
        viewBox="0 0 27.878 26.298"
        className={[
          class_svg_default,
          ...other_svg_classes,
        ].join(" ")}
        onClick={modalAction}
      >
        <path
          className={line_class}
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          d="M2 24.298h23.878"
        />
        <path
          className={line_class}
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          d="M2 13.149h23.878"
        />
        <path
          className={line_class}
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          d="M2 2h23.878"
        />
      </svg>
      <SideBar
        fnClick={modalAction}
        state={open}
        sidebarOpenStyling="absolute top-0 right-0 bg-light h-full w-full transform-gpu transition-all duration-500"
      />
    </>
  );
}
