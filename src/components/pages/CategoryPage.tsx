import NavBar from "./../Navbar/Navbar";
import DivWrapper from "./../Generic/DIVWrapper";
import {NavLink} from "react-router-dom";
import {useParams} from "react-router-dom";
import {NavbarItemsArray} from "../../SiteDefaults/NavbarItems";
import ImageCard from "../Cards/ImageCard/ImageCard";
// interface CategoryPageI{

// }

export default function CategoryPage(): JSX.Element {
  const {id} = useParams<{id: string}>();
  return (
    <DivWrapper>
      <NavBar />
      <div className="col-start-2 flex md:hidden text-center gap-x-1">
        {NavbarItemsArray.map((el) => {
          return (
            <p className="px-2 py-1 w-full border-2 border-gray-200 rounded-md">
              <NavLink to={`/category/${el}`}>{el}</NavLink>
            </p>
          );
        })}
      </div>
      <div className="col-start-2 text-sm text-dark">
        {id}
      </div>
      <div className="flex col-start-2 gap-x-4">
        <div className="w-1/5 h-96 hidden md:block">
          <div className="w-full">
            {NavbarItemsArray.map((el) => {
              return (
                <p className="py-1 w-full text-dark tracking-wide hover:text-gray-400">
                  <NavLink to={`/category/${el}`}>
                    {el}
                  </NavLink>
                </p>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 w-full md:w-4/5 gap-2">
          {Array(8)
            .fill(0)
            .map((el) => (
              <ImageCard
                descVisible={true}
                wrapperStyle="w-full h-full relative "
              />
            ))}
        </div>
      </div>
      {console.log(id)}
    </DivWrapper>
  );
}
