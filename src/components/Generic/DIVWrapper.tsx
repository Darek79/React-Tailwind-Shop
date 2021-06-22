import {classes} from "../../Utils/classesCreator";
import {Generic} from "../../Interfaces/Interfaces";

export default function GenericWrapper({
  parent_style = "grid gap-y-4 w-screen grid-cols-mobile xl:grid-cols-desktop select-none overflow-x-hidden",
  child_style = "",
  children,
}: Generic): JSX.Element {
  return (
    <div className={classes([parent_style, child_style])}>
      {children}
    </div>
  );
}
