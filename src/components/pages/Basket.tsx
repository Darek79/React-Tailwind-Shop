import DivWrapper from "./../Generic/DIVWrapper";
import NavBar from "./../Navbar/Navbar";
import BasketItem from "../BasketPageComponents/BasketItem";
import SummaryBox from "../BasketPageComponents/SummaryBox";
import CheckoutBox from "../BasketPageComponents/CheckoutBox";
import ImageSlider from "../ImageSlider/ImageSlider";
import ItemMobileBox from "../BasketPageComponents/ItemMobileBox";
import {siteCurrency} from "../../SiteDefaults/NavbarItems";
import {useCallback} from "react";
import {deleteItemsFromBasket} from "./../../redux/reducers/basketReducder";
import {
  useAppSelector,
  useAppDispatch,
} from "./../../redux/hooks";

const summary = [
  {item: "Subtotal", sum: "0.00"},
  {item: "Shipping", sum: "0.00"},
  {item: "Tax", sum: ""},
  {item: "Total", sum: "0.00"},
];
interface BasketI {
  currency?: number;
}

export default function Basket({
  currency = siteCurrency,
}: BasketI): JSX.Element {
  const dispatch = useAppDispatch();
  const basket = useAppSelector((state) => state.basket);

  const cl = useCallback(() => {
    dispatch(deleteItemsFromBasket("1234"));
  }, [dispatch]);

  return (
    <DivWrapper>
      <NavBar />
      <section className="col-start-2 block lg:flex">
        <ItemMobileBox
          basket={basket}
          currency={currency}
        />
        <section className="grid grid-rows-1 gap-y-4 mt-4 lg:mt-0 w-full lg:w-1/2">
          {[1, 2, 3, ...basket].map((el, i) => (
            <BasketItem key={i} deleteFn={cl} />
          ))}
        </section>
        <SummaryBox summary={summary} />
      </section>
      <CheckoutBox />
      <ImageSlider />
    </DivWrapper>
  );
}
