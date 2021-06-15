import CSS from "csstype";
import Debouncer from "../../Hooks/DebouncerResize";
import {useState, useRef, useEffect} from "react";
import ImageCard from "../Cards/ImageCard/ImageCard";
import Arrow from "../Navbar/SVG/Arrow/Arrow";

interface ImageSliderI {
  links?: string[];
  w?: string;
  h?: string;
}

const products = [
  "https://via.placeholder.com/400x400/999900?text=Image",
  "https://via.placeholder.com/400x400/999900?text=Image",
  "https://via.placeholder.com/400x400/999900?text=Image",
  "https://via.placeholder.com/400x400/999900?text=Image",
  "https://via.placeholder.com/400x400/999900?text=Image",
  "https://via.placeholder.com/400x400/999900?text=Image",
  "https://via.placeholder.com/400x400/999900?text=Image",
  "https://via.placeholder.com/400x400/999900?text=Image",
  "https://via.placeholder.com/400x400/999900?text=Image",
];

export default function ImageS({
  links = products,
}: ImageSliderI): JSX.Element {
  const params = Debouncer();
  const arrowClicksRef = useRef<number>(0);
  const [moved, setMove] = useState(0);
  const [hideLeftArrow, setHideLeftArrow] =
    useState<boolean>(true);
  const [hideRightArrow, setHideRightArrow] =
    useState<boolean>(false);

  useEffect(() => {
    if (
      arrowClicksRef.current > 0 &&
      arrowClicksRef.current < 2
    ) {
      setHideLeftArrow(false);
    }
    if (arrowClicksRef.current === 0) {
      setHideLeftArrow(true);
    }
    if (arrowClicksRef.current === 6) {
      setHideRightArrow(true);
    }
    if (arrowClicksRef.current < 6) {
      setHideRightArrow(false);
    }
  }, [moved]);

  function moveRight() {
    arrowClicksRef.current++;
    setMove((p) => p - params);
  }
  function moveLeft() {
    arrowClicksRef.current--;
    setMove((p) => p + params);
  }
  return (
    <div className="relative col-start-2 xl:col-end-2">
      {!hideLeftArrow ? (
        <div
          className="absolute top-0 h-full z-10 w-14 flex justify-center items-center"
          onClick={moveLeft}
        >
          <Arrow
            wrapper_class="p-2 border-white border-2 w-8 rounded-full bg-light hover:cursor-pointer"
            svg_class="w-full"
            stroke="#0f181a"
            strokeWidth="5"
          />
        </div>
      ) : undefined}
      {!hideRightArrow ? (
        <div
          className="absolute outline-none top-0 right-0 h-full z-10 w-14 flex justify-center items-center"
          onClick={moveRight}
        >
          <Arrow
            wrapper_class="p-2 ml-2 transform rotate-180 top-1/3 right-2 z-10 border-white border-2 w-8 rounded-full bg-light hover:cursor-pointer"
            svg_class="w-full"
            stroke="#0f181a"
            strokeWidth="5"
          />
        </div>
      ) : undefined}

      <div
        className="grid grid-flow-col bg-gray-200 auto-cols-max relative overflow-x-hidden transition-all ease-in duration-150 transform-gpu"
        style={{
          transform: `translateX(${moved}rem)`,
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          width: `${products.length * params}rem`,
        }}
      >
        {links.map((el, i) => {
          return (
            <span
              key={i}
              style={{
                width: `${params}rem`,
              }}
            >
              <ImageCard url={el} />
            </span>
          );
        })}
      </div>
    </div>
  );
}
{
  /* <div
        className="flex relative overflow-x-hidden transition-all ease-in duration-150 transform-gpu"
        style={{
          transform: `translateX(${moved}rem)`,
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          width: `${products.length * params}rem`,
        }}
      >*/
}
