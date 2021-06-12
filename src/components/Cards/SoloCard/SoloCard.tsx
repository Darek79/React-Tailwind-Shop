import {NavLink} from "react-router-dom";
import {memo} from "react";
import {classes} from "./../../../Utils/classesCreator";
interface ImageCardI {
  url?: string;
  path?: string;
  description?: string;
  defaultStyle?: string;
  position?: string;
}

export default memo(function SoloCard({
  url = "https://via.placeholder.com/400x400/999900?text=Image",
  path = "",
  description = "test",
  defaultStyle = "flex flex-col w-full h-full md:items-start xl:w-full 2xl:w-full",
  position = "items-end",
}: ImageCardI): JSX.Element {
  return (
    <div className="flex col-start-2">
      <section className="py-2 w-full h-full bg-gray-200 pl-1 pr-1">
        <NavLink to={`/${path}`}>
          <div className={classes(defaultStyle, position)}>
            <img
              className="w-4/5 h-4/5 md:w-full xl:w-4/5 2xl:w-4/5"
              alt={description}
              src={url}
            />
            <div className="flex justify-between mt-2 w-4/5 md:w-full xl:w-4/5 2xl:w-4/5">
              <p className="tracking-wide text-md 2xl:text-lg">
                Nike Wildhorse 7
              </p>
              <p className="tracking-wide text-md 2xl:text-lg">
                $130
              </p>
            </div>
            <div
              className={
                position === "items-end"
                  ? "w-full relative left-[20%] "
                  : "w-full relative left-0 "
              }
            >
              <p className="text-gray-500 text-md 2xl:text-lg">
                Women's Trail Running Shoe
              </p>
            </div>
          </div>
        </NavLink>
      </section>
      <section className="py-2 w-full h-full bg-gray-200 pl-1 pr-1 hidden md:block xl:block 2xl:block">
        <NavLink to={`/${path}`}>
          <div className="flex flex-col items-end w-full h-full md:items-start lg:items-end xl:w-full 2xl:w-full">
            <img
              className="w-4/5 h-4/5 md:w-full lg:w-4/5 xl:w-4/5 2xl:w-4/5"
              alt={description}
              src={url}
            />
            <div className="flex justify-between mt-2 w-4/5 md:w-full lg:w-4/5 xl:w-4/5 2xl:w-4/5">
              <p className="tracking-wide text-md 2xl:text-lg">
                Nike Wildhorse 7
              </p>
              <p className="tracking-wide text-md 2xl:text-lg">
                $130
              </p>
            </div>
            <div className="w-full relative left-[20%] md:left-0 lg:left-[20%]">
              <p className="text-gray-500 text-md  2xl:text-lg">
                Women's Trail Running Shoe
              </p>
            </div>
          </div>
        </NavLink>
      </section>
    </div>
  );
});
