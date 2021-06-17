import NavBar from "./../Navbar/Navbar";
import Debouncer from "../../Hooks/DebouncerResize";
import {useParams} from "react-router-dom";
import Image from "../Generic/Image";
import ImageSlider from "./../ImageSlider/ImageSlider";
import Button from "../Generic/Button";
export default function ProductPage(): JSX.Element {
  const params = Debouncer();
  //const params = useParams<{id: string}>();
  return (
    <div className="grid gap-y-4 grid-cols-mobile xl:grid-cols-desktop select-none ">
      <NavBar />
      <section className="flex w-full col-start-2  gap-x-4 justify-center overflow-x-hidden">
        <div className="w-2/5 ">
          <div className="hidden md:grid w-full grid-cols-2 grid-rows-2 justify-items-center gap-y-2 gap-x-2">
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
          </div>
        </div>
        <div className="  w-full md:hidden">
          <ImageSlider descVisible={false} />
        </div>
        <div className="w-2/5 justify-center hidden md:flex">
          <div className="col-start-2 w-3/4 2xl:w-3/5  2xl:">
            <div className="flex justify-between mt-2 ">
              <p className="tracking-wide text-dark text-md 2xl:text-lg">
                Nike Wildhorse 7
              </p>
              <p className="tracking-wide text-dark text-md 2xl:text-lg">
                $130
              </p>
            </div>
            <p className="text-gray-500 mt-2 text-lg 2xl:text-lg font-bold tracking-wide">
              Women's Trail Running Shoe
            </p>
            <div className="w-full  mt-2">
              <p className="tracking-wide text-dark text-md 2xl:text-lg">
                Select Size
              </p>
              <div className=" mt-2 grid grid-cols-6 gap-1">
                {Array(10)
                  .fill(0)
                  .map((el) => (
                    <div className="w-full py-2 px-4 border-2 text-center border-gray-100 rounded-md hover:border-gray-600 hover:cursor-pointer">
                      S
                    </div>
                  ))}
              </div>
              <div className="mt-2">
                <Button
                  buttonText="Add to Bag"
                  customDivClass="w-full py-4 mb-2 hover:cursor-pointer"
                />
                <Button
                  buttonText="Favorit"
                  customDivClass="w-full py-4 mb-2 hover:cursor-pointer"
                />
              </div>
              <div className="w-full h-60 ">
                <p className="tracking-wide text-dark text-md 2xl:text-lg mb-2">
                  Shipping*
                </p>
                <p className="tracking-wide text-dark text-md 2xl:text-lg mb-6">
                  To get accurate shipping information Edit
                  Location
                </p>
                <p className="tracking-wide text-dark text-md 2xl:text-lg mb-2">
                  Pickup
                </p>
                <p className="tracking-wide text-dark text-md 2xl:text-lg mb-4">
                  Find a Store
                </p>
                <p className="tracking-wide text-gray-500 text-md md:text-sm ">
                  *Faster Shipping options may be available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="col-start-2 h-96 w-full">test</div>
    </div>
  );
}

// {
//   /* <section className=" flex gap-x-2 gap-y-2 w-full md:flex-row flex-col-reverse col-start-2 overflow-x-hidden">
//   <div className="col-start-1 hidden md:grid w-3/4 grid-cols-3 grid-rows-2 justify-items-center gap-y-2 gap-x-2">
//     <Image />
//     <Image />
//     <Image />
//     <Image />
//     <Image />
//     <Image />
//   </div>
//   <div className="col-start-1  w-full md:hidden">
//     <ImageSlider descVisible={false} />
//   </div>
//   <div className="col-start-2 w-full md:w-1/3  ">
//     <div className="flex justify-between mt-2 ">
//       <p className="tracking-wide text-dark text-md 2xl:text-lg">
//         Nike Wildhorse 7
//       </p>
//       <p className="tracking-wide text-dark text-md 2xl:text-lg">
//         $130
//       </p>
//     </div>
//     <p className="text-gray-500 mt-2 text-lg 2xl:text-lg font-bold tracking-wide">
//       Women's Trail Running Shoe
//     </p>
//     <div className="h-96 w-full  mt-2">
//       <p>Select Size</p>
//       <div className=" mt-2 grid grid-cols-6 gap-1">
//         {Array(10)
//           .fill(0)
//           .map((el) => (
//             <div className="w-full py-2 px-4 border-2 text-center border-gray-100 rounded-md hover:border-gray-600 hover:cursor-pointer">
//               S
//             </div>
//           ))}
//       </div>
//       <Button
//         buttonText="Add to Bag"
//         customDivClass="w-full py-4 max-w-[80%]"
//       />
//       <Button
//         buttonText="Favorit"
//         customDivClass="w-full py-4"
//       />
//     </div>
//   </div>
// </section>; */
// }
