import {SVG} from "./../../../../Interfaces/Interfaces";

export default function ClosingX({
  strokeWidth = "1",
  fill,
  stroke = "#707070",
  line_class,
  svg_class,
  fnClick,
}: SVG): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-2 -2 35.414 35.414"
      className={svg_class}
      onClick={fnClick}
    >
      <path
        className={line_class}
        fill={fill}
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M.707.707l25 25"
      />
      <path
        className={line_class}
        fill={fill}
        stroke={stroke}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        d="M25.707.707l-25 25"
      />
    </svg>
  );
}
