import {SVG} from "./../../../../Interfaces/Interfaces";

export default function Cart({
  strokeWidth = "4",
  fill,
  stroke = "#707070",
  line_class,
  svg_class,
}: SVG): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36.722 37.665"
      className={svg_class}
    >
      <path
        className={line_class}
        fill={fill}
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M2 2h4.715l4.149 28.007H31.61l3.112-20.652H7.94L6.715 2z"
      />
      <path
        className={line_class}
        fill={fill}
        stroke={stroke}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        d="M29.835 35.665h-16.5"
      />
      <text
        fill="#f7fff7"
        fontSize="14"
        transform="translate(16 24.7)"
      >
        <tspan x="0" y="0">
          9
        </tspan>
      </text>
    </svg>
  );
}
