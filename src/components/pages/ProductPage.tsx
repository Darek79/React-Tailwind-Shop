import NavBar from "./../Navbar/Navbar";
import Debouncer from "../../Hooks/DebouncerResize";
import {useParams} from "react-router-dom";
import SoloCard from "../Cards/SoloCard/SoloCard";
import ImageS from "./../ImageSlider/ImageSlider";
export default function ProductPage(): JSX.Element {
  const params = Debouncer();
  //const params = useParams<{id: string}>();
  return (
    <div className="grid gap-y-4 grid-cols-mobile xl:grid-cols-desktop select-none ">
      <NavBar />
      <section className=" flex gap-x-2 gap-y-2 w-full md:flex-row flex-col-reverse col-start-2">
        {console.log(params)}
        <div className="col-start-1  bg-green-800 ">
          <ImageS />
        </div>
        <div className="col-start-2 w-full md:w-2/5 h-20  bg-green-500 ">
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
        </div>
      </section>
      <div className="col-start-2 h-96 w-full">test</div>
    </div>
  );
}
