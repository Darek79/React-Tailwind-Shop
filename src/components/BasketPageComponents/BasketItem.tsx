import Image from "../Generic/Image";
import ProductDescription from "../ProductPageComponents/ProductDescription";

export default function BasketItem() {
  return (
    <div className="w-full h-24 md:h-36 flex gap-x-2 ">
      <div className="w-36 md:h-36">
        <Image />
      </div>
      <ProductDescription wrapperDefault="flex justify-between " />
    </div>
  );
}
