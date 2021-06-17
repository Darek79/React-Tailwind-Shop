import NavBar from "./../Navbar/Navbar";

export default function CategoryPage(): JSX.Element {
  return (
    <div className="grid gap-y-4 w-screen grid-cols-mobile xl:grid-cols-desktop select-none overflow-x-hidden">
      <NavBar />
    </div>
  );
}
