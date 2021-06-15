import Navbar from "../Navbar/Navbar";
import SoloCard2 from "../Cards/SoloCard/SoloCard";

export default function Test(): JSX.Element {
  return (
    <div className="grid gap-y-4 w-screen grid-cols-mobile xl:grid-cols-desktop select-none overflow-x-hidden">
      <Navbar />
      <SoloCard2 wrapperStyle="col-start-2" />
    </div>
  );
}
