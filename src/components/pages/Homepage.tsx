import NavBar from "./../Navbar/Navbar";
import MainCard from "../Cards/MainCard/MainCard";
import ImageSlider from "./../../components/ImageSlider/ImageSlider";
import SoloCard from "../Cards/SoloCard/SoloCard";
export default function Homepage(): JSX.Element {
  return (
    <div className="grid gap-y-4 w-screen grid-cols-mobile xl:grid-cols-desktop select-none overflow-x-hidden">
      <NavBar />
      <MainCard />
      <ImageSlider />
      <SoloCard position="items-start" />
      <ImageSlider />
      <MainCard />
      <SoloCard position="items-start" />
      <SoloCard position="items-start" />
    </div>
  );
}

//grid grid-cols-mobile lg:grid-cols-desktop
// grid-cols-1
