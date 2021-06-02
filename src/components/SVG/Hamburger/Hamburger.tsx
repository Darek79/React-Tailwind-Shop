import {
  CompClasses,
  SVG,
} from "./../../../Interfaces/Interfaces";
import "./hamburger.scss";

type CompProps = SVG & CompClasses;

export default function Hamburger({
  strokeWidth,
  fill = "none",
  stroke = "#707070",
  class_svg_default,
  other_svg_classes = [" "],
  line_class,
  wrapper_class,
}: CompProps): JSX.Element {
  return (
    <div className={wrapper_class}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 35 30.298"
        className={[
          class_svg_default,
          ...other_svg_classes,
        ].join(" ")}
      >
        <path
          className={line_class}
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          d="M0 27.298h35"
        />
        <path
          className={line_class}
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          d="M0 15.149h35"
        />
        <path
          className={line_class}
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          d="M0 3h35"
        />
      </svg>
    </div>
  );
}
