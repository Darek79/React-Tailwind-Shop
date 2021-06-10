import {SVG} from "./../../../../Interfaces/Interfaces";

export default function ArrowR({
  stroke = "#707070",
  strokeWidth = "4",
  fnClick,
  svg_class,
  wrapper_class,
}: SVG): JSX.Element {
  return (
    <div className={wrapper_class}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 29.945 30.898"
        onClick={fnClick}
        className={svg_class}
      >
        <path
          fill="none"
          stroke={stroke}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
          d="M27.1458 15.2589L2.8109 27.2602"
        />
        <path
          fill="none"
          stroke={stroke}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
          d="M27.144 15.058L3.077 2.693"
        />
      </svg>
    </div>
  );
}
