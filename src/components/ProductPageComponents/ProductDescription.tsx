interface ProductDescriptionI {
  title?: string;
  price?: string;
  description?: string;
  currency?: string;
}

export default function ProductDescription({
  title = " Nike Wildhorse 7",
  price = "130",
  description = "Women's Trail Running Shoe",
  currency = "$",
}: ProductDescriptionI): JSX.Element {
  return (
    <div className="w-full">
      <div className="flex justify-between mt-2 ">
        <p className="tracking-wide text-dark text-md 2xl:text-lg">
          {title}
        </p>
        <p className="tracking-wide text-dark text-md 2xl:text-lg">
          {price + currency}
        </p>
      </div>
      <p className="text-gray-500 mt-2 text-lg 2xl:text-lg font-bold tracking-wide">
        {description}
      </p>
    </div>
  );
}
