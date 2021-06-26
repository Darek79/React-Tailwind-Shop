import {SVG} from "../../../../Interfaces/Interfaces";

export default function BasketIcon({
  strokeWidth = "2",
  stroke = "#0f181a",
  svg_class,
  fnClick,
}: SVG) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 39.699 36.792"
      className={svg_class}
    >
      <path
        fill="none"
        stroke={stroke}
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M5.645 6.379l6.374 29.413h16.174l6.67-29.413z"
      />
      <path
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        d="M1.5 6.379h36.7"
      />
      <path
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        d="M13.706 6.175L14.906 1h9.795l1.5 5.379"
      />
      <path
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        d="M19.874 9.64v22.028"
      />
      <path
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        d="M12.0077 10.337l3.9244 22.2157"
      />
      <path
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        d="M27.9163 10.661l-3.9244 22.2157"
      />
    </svg>
  );
}
