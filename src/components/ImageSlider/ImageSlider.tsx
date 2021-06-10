import CSS from "csstype";

import React, {useState, useRef, useEffect} from "react";
import ImageCard from "./../Cards/ImageCard/ImageCard";
import Arrow from "./../Navbar/SVG/Arrow/Arrow";

interface ImageSliderI {
  links?: string[];
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

export default function ImageSlider({
  links = products,
}: ImageSliderI): JSX.Element {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const countRef = useRef<number>(0);
  const limitRef = useRef<number>(0);
  const [moved, setMove] = useState(0);
  const [hideLeftArrow, setHideLeftArrow] =
    useState<boolean>(true);
  const [hideRightArrow, setHideRightArrow] =
    useState<boolean>(false);

  useEffect(() => {
    if (products.length % 3 === 0) {
      limitRef.current = 2;
      if (sliderRef.current !== null) {
        countRef.current =
          sliderRef.current?.offsetWidth / 3;
      }
    }
    if (products.length % 2 === 0) {
      limitRef.current = 5;
      if (sliderRef.current !== null) {
        countRef.current =
          sliderRef.current?.offsetWidth / products.length;
      }
    }
  }, []);

  useEffect(() => {
    if (!moved) {
      setHideLeftArrow((p) => !p);
      setHideRightArrow((p) => !p);
    }
    if (
      Math.abs(moved) ===
        countRef.current * limitRef.current &&
      Math.abs(moved) !== 0
    ) {
      setHideLeftArrow((p) => !p);
      setHideRightArrow((p) => !p);
    }
  }, [moved]);

  function moveRight() {
    setMove((p) => p - countRef.current);
  }
  function moveLeft() {
    setMove((p) => p + countRef.current);
  }

  return (
    <div className="relative ml-6">
      {console.log(
        Math.abs(moved),
        "moved",
        Math.abs(moved) ===
          countRef.current * limitRef.current &&
          Math.abs(moved) !== 0
      )}
      <div
        className="absolute top-0 h-96 z-10 w-14 flex justify-center items-center"
        onClick={moveLeft}
      >
        {hideLeftArrow ? (
          <Arrow
            wrapper_class="p-2 border-white border-2 w-8 rounded-full bg-light hover:cursor-pointer "
            svg_class="w-full"
            stroke="#0f181a"
            strokeWidth="5"
          />
        ) : undefined}
      </div>
      <div
        className="absolute top-0 right-0 h-96 z-10 w-14 flex justify-center items-center"
        onClick={moveRight}
      >
        {hideRightArrow ? (
          <Arrow
            wrapper_class="p-2 ml-2 transform
     rotate-180 top-1/3 right-2
      z-10 border-white border-2
      w-8 rounded-full bg-light
      hover:cursor-pointer"
            svg_class="w-full"
            stroke="#0f181a"
            strokeWidth="5"
          />
        ) : undefined}
      </div>
      {console.log(countRef.current)}
      <div
        className="flex relative overflow-x-hidden transition-all ease-in duration-150 transform-gpu"
        style={{
          transform: `translateX(${moved}px)`,
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          width: `${products.length * 400}px`,
        }}
        ref={sliderRef}
      >
        {links.map((el, i) => (
          <ImageCard key={i} url={el} />
        ))}
      </div>
    </div>
  );
}
