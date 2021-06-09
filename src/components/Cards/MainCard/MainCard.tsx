import image from "./../../../assets/shoesW.webp";
import Button from "./../../Generic/Button";
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
    <section className="row-start-2 bg-gray-300 h-full">
      <div className=" w-screen h-full px-4 py-4 flex bg-red-200 flex-col-reverse lg:flex-row">
        <div className="lg:w-1/4 h-full flex flex-col lg:pt-20 p-1 lg:p-2 items-center lg:items-start">
          <p className=" lg:text-2xl text-xl text-light tracking-wide font-bold">
            {title}
          </p>
          <p className=" lg:text-xl text-md text-light tracking-wide">
            {text}
          </p>

          <Button buttonClass="" buttonText="Shop" />
        </div>

        <div className="lg:w-3/4 w-full h-full ">
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

{
  /* <section className="row-start-2 bg-gray-300 h-full">
<div className="px-4 py-4 flex justify-around flex-wrap">
  <div className="w-1/4 h-40 border-2 flex-grow">
    test
  </div>
  <div className="w-3/5 flex-grow">
    <img
      className="w-full"
      alt="test"
      src={image}
    ></img>
  </div>
</div>
</section> */
}
