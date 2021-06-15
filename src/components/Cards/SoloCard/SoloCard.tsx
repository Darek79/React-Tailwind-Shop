import Image from "../../Generic/Image";
import {NavLink} from "react-router-dom";
import {ImageCardI} from "../../../Interfaces/Interfaces";
import Button from "../../Generic/Button";
import Debouncer from "../../../Hooks/DebouncerResize";

interface SoloCardI extends ImageCardI {}

export default function SoloCard2({
  url = "https://via.placeholder.com/400x400/999900?text=Image",
  path = "",
  description = "test",
  defaultStyle = "flex flex-col w-full h-full md:items-start xl:w-full 2xl:w-full",
  wrapperStyle = "col-start-2 flex gap-x-4 relative",
}: SoloCardI): JSX.Element {
  const params = Debouncer();
  return (
    <figure
      className="col-start-2 flex gap-x-4 relative"
      style={{
        height: `${
          params < 20 ? params * 3 : params * 1.8
        }rem`,
      }}
    >
      {console.log(params)}
      <NavLink to={path}>
        <Image
          wrapperStyling="w-full h-full"
          imageStyling="w-full h-full"
          alt="Product"
        />
        <div className="w-4/5 md:w-full xl:w-4/5 2xl:w-4/5 absolute bottom-20 pl-4">
          <p className="tracking-wide text-md 2xl:text-lg text-light font-bold">
            Nike Wildhorse 7
          </p>
          <p className="tracking-wide text-md 2xl:text-lg text-light mb-4">
            Women's Trail Running Shoe
          </p>
          <Button />
        </div>
      </NavLink>
      {params >= 20 ? (
        <NavLink to={path}>
          <Image
            wrapperStyling="w-full h-full"
            imageStyling="w-full h-full"
            alt="Product"
          />
          <div className="w-4/5 md:w-full xl:w-4/5 2xl:w-4/5 absolute bottom-20 pl-4">
            <p className="tracking-wide text-md 2xl:text-lg text-light font-bold">
              Nike Wildhorse 7
            </p>
            <p className="tracking-wide text-md 2xl:text-lg text-light mb-4">
              Women's Trail Running Shoe
            </p>
            <Button />
          </div>
        </NavLink>
      ) : undefined}
    </figure>
  );
}
