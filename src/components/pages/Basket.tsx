import DivWrapper from "./../Generic/DIVWrapper";
import Image from "../Generic/Image";
import NavBar from "./../Navbar/Navbar";
import ProductDescription from "../ProductPageComponents/ProductDescription";
import BasketItem from "../BasketPageComponents/BasketItem";
import {basketItems} from "./../../Utils/classesCreator";
import {siteCurrency} from "../../SiteDefaults/NavbarItems";
import {
  useAppSelector,
  useAppDispatch,
} from "./../../redux/hooks";

interface BasketI {
  currency?: number;
}

export default function Basket({
  currency = siteCurrency,
}: BasketI): JSX.Element {
  const basket = useAppSelector((state) => state.basket);
  return (
    <DivWrapper>
      <NavBar />
      <section className="col-start-2">
        <div className="md:hidden block">
          <p className="text-center text-lg">Bag</p>
          <div className="h-10 bg-dark flex items-center justify-center">
            <p className="text-light">{`${
              basket.length === 0 ? 0 : basketItems(basket)
            }`}</p>
            <p className="px-4 text-light">|</p>
            <p className="text-light">{`0.00 ${String.fromCharCode(
              currency
            )}`}</p>
          </div>
        </div>
        <section className="grid grid-rows-1 gap-y-4 mt-4">
          <BasketItem />
          <BasketItem />
        </section>
      </section>
    </DivWrapper>
  );
}
