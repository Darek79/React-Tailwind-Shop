import {classes} from "./../../Utils/classesCreator";
import {siteCurrency} from "./../../SiteDefaults/NavbarItems";
interface ProductDescriptionI {
  title?: string;
  price?: string;
  description?: string;
  currency?: number;
  textColor?: string;
  textSize?: string;
  textWide?: string;
  textColorDesc?: string;
  wrapperDefault?: string;
}

export default function ProductDescription({
  title = " Nike Wildhorse 7",
  price = "130",
  description = "Women's Trail Running Shoe",
  currency = siteCurrency,
  textColor = "text-dark",
  textColorDesc = "text-gray-500 mt-2 font-bold",
  textSize = "text-md 2xl:text-lg",
  textWide = "tracking-wide",
  wrapperDefault = "flex justify-between mt-2 ",
}: ProductDescriptionI): JSX.Element {
  return (
    <div className="w-full">
      <div className={classes([wrapperDefault])}>
        <p
          className={classes([
            textColor,
            textSize,
            textWide,
          ])}
        >
          {title}
        </p>
        <p
          className={classes([
            textColor,
            textSize,
            textWide,
          ])}
        >
          {price + String.fromCharCode(currency)}
        </p>
      </div>
      <p
        className={classes([
          textColor,
          textSize,
          textWide,
          textColorDesc,
        ])}
      >
        {description}
      </p>
    </div>
  );
}

//"tracking-wide text-dark text-md 2xl:text-lg"
