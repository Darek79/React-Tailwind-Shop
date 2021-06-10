import NavBar from "./../Navbar/Navbar";
import MainCard from "../Cards/MainCard/MainCard";
import ImageSlider from "./../../components/ImageSlider/ImageSlider";
export default function Homepage(): JSX.Element {
  return (
    <div className="grid grid-cols-1 overflow-x-hidden select-none">
      <NavBar />
      <MainCard />
      <ImageSlider />
      <div className="h-60"></div>
    </div>
  );
}

//grid grid-cols-mobile lg:grid-cols-desktop
