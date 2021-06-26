import Button from "../Generic/Button";
import {NavLink} from "react-router-dom";
import {Style} from "../../Interfaces/Interfaces";

export default function CheckoutBox({
  styleWrapper = "fixed bottom-0 w-full p-2 z-50 block lg:hidden",
  styleDefault,
  styleCustom,
}: Style): JSX.Element {
  return (
    <section className={styleWrapper}>
      <NavLink to="/checkout">
        <Button
          buttonText="Checkout"
          customDivClass="w-full p-4"
        />
      </NavLink>
    </section>
  );
}
