import Image from "../Generic/Image";
import ProductDescription from "../ProductPageComponents/ProductDescription";
import BasketIcon from "./../Navbar/SVG/BasketIcon/BasketIcon";
import {memo} from "react";

interface BasketItemI {
  deleteFn?: () => void;
}

export default memo(function BasketItem({
  deleteFn,
}: BasketItemI) {
  return (
    <div className="w-full h-30 flex gap-x-2 content-center bg-gray-100 pr-2">
      <div className="w-40 h-full">
        <Image />
      </div>
      <div className="w-full h-full">
        <ProductDescription wrapperDefault="flex justify-between" />
        <div className="w-full h-1/2 flex flex-col justify-center">
          <div className="flex">
            <p>quantity</p>
            <p>size</p>
            <span className="ml-auto" onClick={deleteFn}>
              <BasketIcon svg_class="w-5 h-5" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});
