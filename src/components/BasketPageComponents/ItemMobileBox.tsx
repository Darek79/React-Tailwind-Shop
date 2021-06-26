import {BasketReducerI} from "./../../Interfaces/Interfaces";
import {basketItems} from "./../../Utils/classesCreator";
interface ItemMobileBoxI {
  basket: BasketReducerI;
  currency: number;
}

export default function ItemMobileBox({
  basket,
  currency,
}: ItemMobileBoxI): JSX.Element {
  return (
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
  );
}
