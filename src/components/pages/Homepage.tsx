import NavBar from "./../Navbar/Navbar";
import MainCard from "../Cards/MainCard/MainCard";
import ImageSlider from "./../../components/ImageSlider/ImageSlider";
import SoloCard from "../Cards/SoloCard/SoloCard";
export default function Homepage(): JSX.Element {
  return (
    <div className="grid gap-y-4 w-screen grid-cols-mobile xl:grid-cols-desktop select-none overflow-x-hidden">
      <NavBar />
      <MainCard />
      <div className="col-start-2 xl:col-end-2 w-full overflow-x-hidden">
        <ImageSlider />
      </div>
      <SoloCard />
      <div className="col-start-2 xl:col-end-2 w-full overflow-x-hidden">
        <ImageSlider />
      </div>
      <MainCard />
      <SoloCard position="items-start" />
      <SoloCard />
    </div>
  );
}

//grid grid-cols-mobile lg:grid-cols-desktop
// grid-cols-1
