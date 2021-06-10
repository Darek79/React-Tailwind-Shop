import {SVG} from "../../../../Interfaces/Interfaces";

export default function Arrow({
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
        viewBox="0 0 29.945 30.703"
        onClick={fnClick}
        className={svg_class}
      >
        <path
          fill="none"
          stroke={stroke}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
          d="M2.8009 15.6398L27.1368 3.6385"
        />
        <path
          fill="none"
          stroke={stroke}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
          d="M2.801 15.645L26.868 28.01"
        />
      </svg>
    </div>
  );
}
