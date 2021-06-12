import {useRef} from "react";
import Debouncer from "./../../Hooks/DebouncerResize";
export default function Test(): JSX.Element {
  const params = Debouncer();
  const divRef = useRef<number>(
    window.innerWidth - (window.innerWidth * 20) / 100
  );

  return (
    <div className="grid grid-cols-mobile  xl:grid-cols-desktop h-auto bg-gray-800 gap-y-8 ">
      <div className="bg-green-600 w-full h-32 col-start-2"></div>
      <div className="col-start-2 w-full h-full overflow-hidden">
        {console.log(divRef.current / 16)}
        {console.log(params)}

        <div
          className="bg-gray-400 overflow-scroll relative flex"
          style={{
            width: `${((divRef.current / 3) * 8) / 16}rem`,
            height: `${divRef.current / 3 / 16}rem`,
          }}
        >
          {Array(8)
            .fill(0)
            .map((el) => (
              <div
                className=" h-full bg-red-400 flex-shrink-0 border-2"
                style={{
                  height: `${divRef.current / 3 / 16}rem`,
                  width: `${divRef.current / 3 / 16}rem`,
                }}
              />
            ))}
        </div>
      </div>

      {/* <div
        ref={divRef}
        className="bg-green-200 w-full h-[500px] col-start-2  overflow-x-hidden "
      >
        <div className="w-full h-full overflow-x-scroll flex relative">
          <div className="w-[569px] h-full bg-gray-400 pr-4 ">
            <div className="w-full h-full bg-red-200 "></div>
          </div>
          <div className="w-[569px] h-full bg-gray-400 pr-4 ">
            <div className="w-full h-full bg-red-200 "></div>
          </div>
          <div className="w-[569px] h-full bg-gray-400 pr-4 ">
            <div className="w-full h-full bg-red-200 "></div>
          </div>
          <div className="w-[569px] h-full bg-gray-400 pr-4 ">
            <div className="w-full h-full bg-red-200 "></div>
          </div>
          <div className="w-[569px] h-full bg-gray-400 pr-4 ">
            <div className="w-full h-full bg-red-200 "></div>
          </div>
          <div className="w-[569px] h-full bg-gray-400 pr-4 ">
            <div className="w-full h-full bg-red-200 "></div>
          </div>
          <div className="w-[569px] h-full bg-gray-400 pr-4 ">
            <div className="w-full h-full bg-red-200 "></div>
          </div>
        </div>
      </div> */}
      <div className="bg-green-800 w-full h-32 col-start-2"></div>
    </div>
  );
}
