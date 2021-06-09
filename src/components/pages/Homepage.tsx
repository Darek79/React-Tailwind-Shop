import NavBar from "./../Navbar/Navbar";
import MainCard from "./../Cards/MainCard/MainCard";
export default function Homepage(): JSX.Element {
  return (
    <div className="grid grid-cols-mobile lg:grid-cols-desktop">
      <NavBar />
      <MainCard />
      <div>test</div>
    </div>
  );
}
