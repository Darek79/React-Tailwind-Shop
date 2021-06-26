import {siteCurrency} from "../../SiteDefaults/NavbarItems";
import {Style} from "./../../Interfaces/Interfaces";
import {classes} from "./../../Utils/classesCreator";
interface SummaryItemI extends Style {
  item?: string;
  sum?: string;
}

export default function SummaryItem({
  item,
  sum,
  styleDefault = "text-md text-dark lg:text-lg",
  styleWrapper = "w-full flex justify-between",
  styleCustom = "",
}: SummaryItemI): JSX.Element {
  return (
    <div className={classes([styleWrapper])}>
      <p className={classes([styleDefault, styleCustom])}>
        {item}
      </p>
      <p
        className={classes([styleDefault, styleCustom])}
      >{`${sum ? sum : "---"} ${String.fromCharCode(
        siteCurrency
      )}`}</p>
    </div>
  );
}
