import NavBar from "./../Navbar/Navbar";
import DivWrapper from "./../Generic/DIVWrapper";
import MainCard from "../Cards/MainCard/MainCard";
import ImageSlider from "./../../components/ImageSlider/ImageSlider";
import SoloCard from "../Cards/SoloCard/SoloCard";
export default function Homepage(): JSX.Element {
  return (
    <DivWrapper>
      <NavBar />
      <MainCard />
      <ImageSlider />
      <SoloCard position="items-start" />
      <ImageSlider />
      <MainCard />
      <SoloCard position="items-start" />
      <SoloCard position="items-start" />
    </DivWrapper>
  );
}

//grid grid-cols-mobile lg:grid-cols-desktop
// grid-cols-1
