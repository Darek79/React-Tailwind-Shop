import {NavLink} from "react-router-dom";
import {memo} from "react";
import Image from "./../../Generic/Image";

interface ImageCardI {
  url?: string;
  path?: string;
  description?: string;
  descVisible?: boolean;
  w?: string;
  h?: string;
}

export default memo(function ImageCard({
  url = "https://via.placeholder.com/400x400/999900?text=Image",
  path = "",
  description = "test",
  descVisible = true,
}: ImageCardI): JSX.Element {
  return (
    <section className="w-full h-full pl-1 pr-1 py-2 relative flex-shrink-0">
      <NavLink to={`/${path}`}>
        <figure>
          <img
            className="w-full h-full"
            alt={description}
            src={url}
          />
        </figure>
        {/* <Image /> */}
        {descVisible ? (
          <div>
            <div className="flex justify-between mt-2">
              <p className="tracking-wide text-md 2xl:text-lg">
                Nike Wildhorse 7
              </p>
              <p className="tracking-wide text-md 2xl:text-lg">
                $130
              </p>
            </div>
            <p className="text-gray-500 text-md 2xl:text-lg">
              Women's Trail Running Shoe
            </p>
          </div>
        ) : undefined}
      </NavLink>
    </section>
  );
});
