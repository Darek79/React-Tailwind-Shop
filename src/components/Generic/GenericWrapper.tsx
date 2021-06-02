import {classes} from "./../../Utils/classesCreator";

interface CompProps {
  default_style?: string;
  custom_style?: string;
  children?: React.ReactNode;
}

export default function GenericWrapper({
  default_style = "",
  custom_style = "",
  children,
}: CompProps): JSX.Element {
  return (
    <div className={classes(default_style, custom_style)}>
      {children}
    </div>
  );
}
