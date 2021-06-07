import NavBar from "./../Navbar/Navbar";

export default function Homepage(): JSX.Element {
  return (
    <div className="grid grid-cols-mobile lg:grid-cols-desktop">
      <NavBar />
    </div>
  );
}
