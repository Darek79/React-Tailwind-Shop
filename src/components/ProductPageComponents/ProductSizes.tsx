interface ProductSizesI {
  description?: string;
  sizeArray?: string[];
}

export default function ProductSizes({
  description = "Select Size",
  sizeArray,
}: ProductSizesI): JSX.Element {
  return (
    <div>
      <p className="tracking-wide text-dark text-md 2xl:text-lg mt-2">
        {description}
      </p>
      <div className=" mt-2 grid grid-cols-6 gap-1">
        {Array(10)
          .fill(0)
          .map((el, i) => (
            <div
              key={i}
              className="w-full py-2 px-4 border-2 text-center border-gray-200 rounded-md hover:border-gray-600 hover:cursor-pointer"
            >
              S
            </div>
          ))}
      </div>
    </div>
  );
}
