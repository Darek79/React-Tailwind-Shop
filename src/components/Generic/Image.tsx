/* eslint-disable */
import {classes} from "./../../Utils/classesCreator";
import CSS from "csstype";
interface ImageI {
  srcSetSmall?: string;
  srcSetdefault?: string;
  imageStyling?: string;
  wrapperStyling?: string;
  alt?: string;
}

const style: CSS.Properties = {
  objectFit: "cover",
};

export default function Image({
  srcSetSmall = "https://via.placeholder.com/400x400/999900?text=SMALL",
  srcSetdefault = "https://via.placeholder.com/1000x1000/ff6666?text=BIG",
  imageStyling = "",
  wrapperStyling = "",
  alt = "Product",
}: ImageI): JSX.Element {
  return (
    <picture className={classes([wrapperStyling])}>
      <source
        media="(max-width:640px)"
        srcSet={srcSetSmall}
      />
      <img
        className={classes([imageStyling])}
        src={srcSetdefault}
        alt={alt}
        style={style}
      />
    </picture>
  );
}
