//import image from "./../../../assets/shoesW.webp";
import Button from "../../Generic/Button";
interface MainCardI {
  title?: string;
  text?: string;
  imgLink?: string;
}

export default function MainCard({
  title = "LOREM IPSUM DOLOR",
  text = "LOREM IPSUM DOLOR",
  imgLink,
}: MainCardI): JSX.Element {
  return (
    <section className="w-full col-start-1 col-end-2 bg-gray-300 h-full">
      <div className=" w-screen h-full px-4 py-4 flex bg-red-200 flex-col-reverse lg:flex-row">
        <div className="lg:w-1/4 2xl:w-1/5 h-full flex flex-col lg:pt-20 p-1 lg:p-2 items-center lg:items-start">
          <p className="2xl:text-3xl lg:text-2xl text-xl text-light tracking-wide font-bold">
            {title}
          </p>
          <p className="2xl:text-2xl lg:text-xl text-md text-light tracking-wide">
            {text}
          </p>

          <Button buttonText="Shop" />
        </div>

        <div className="lg:w-3/4 2xl:w-3/4 w-full h-full ">
          <img
            className="w-full"
            alt="test"
            src="https://via.placeholder.com/1200x500?text=Shop+Page"
          ></img>
        </div>
      </div>
    </section>
  );
}

//row-start-2
