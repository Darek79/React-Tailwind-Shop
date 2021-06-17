// interface ProductShippingI {}

export default function ProductShipping(): JSX.Element {
  return (
    <div className="w-full h-60 ">
      <p className="tracking-wide text-dark text-md mb-2">
        Shipping*
      </p>
      <p className="tracking-wide text-dark text-md mb-6">
        To get accurate shipping information Edit Location
      </p>
      <p className="tracking-wide text-dark text-md mb-2">
        Pickup
      </p>
      <p className="tracking-wide text-dark text-md mb-4">
        Find a Store
      </p>
      <p className="tracking-wide text-gray-500 text-md md:text-sm ">
        *Faster Shipping options may be available
      </p>
    </div>
  );
}
