import {NavLink} from "react-router-dom";
import {memo} from "react";

interface ImageCardI {
  url?: string;
  path?: string;
  description?: string;
}

export default memo(function ImageCard({
  url = "https://via.placeholder.com/400x400/999900?text=Image",
  path = "",
  description = "test",
}: ImageCardI): JSX.Element {
  return (
    <section className="w-96 mr-4 flex-shrink-0 relative">
      <NavLink to={`/${path}`}>
        <div>
          <figure>
            <img alt={description} src={url} />
          </figure>
          <div className="flex justify-between mt-2">
            <p className="tracking-wide">
              Nike Wildhorse 7
            </p>
            <p className="tracking-wide ">$130</p>
          </div>
          <p className="text-gray-400">
            Women's Trail Running Shoe
          </p>
        </div>
      </NavLink>
    </section>
  );
});
