import {useEffect, useState} from "react";

export default function Resize(): number {
  const [siteParams, setParams] = useState(
    window.innerWidth > 1279
      ? (window.innerWidth -
          (window.innerWidth * 20) / 100) /
          16
      : (window.innerWidth - 20) / 16
  );

  function cb(ms: number) {
    let timer: number;
    return () => {
      clearTimeout(timer);
      timer = window.setTimeout(() => {
        setParams(
          window.innerWidth > 1279
            ? (window.innerWidth -
                (window.innerWidth * 20) / 100) /
                16
            : (window.innerWidth - 20) / 16
        );
      }, 300);
    };
  }

  useEffect(() => {
    const debounced = cb(300);
    window.addEventListener("resize", debounced);

    return () =>
      window.removeEventListener("resize", debounced);
  }, []);
  return siteParams >= 79.938
    ? siteParams / 3
    : siteParams / 2;
}

// import {useEffect, useState} from "react";

// export default function IsBreakpoint(): number {
//   const [state, setState] = useState<number>(0);

//   useEffect(() => {
//     setState(window.innerWidth);
//     const resizeHandler = debounce(setState, 500);
//     window.addEventListener("resize", resizeHandler);

//     return () =>
//       window.removeEventListener("resize", resizeHandler);
//   }, []);

//   return state;
// }

// function debounce(fn: (nr: number) => void, ms: number) {
//   let timer: number;

//   return () => {
//     clearTimeout(timer);
//     timer = window.setTimeout(() => {
//       fn(window.innerWidth);
//     }, ms);
//   };
// }
