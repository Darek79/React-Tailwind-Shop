import {useState} from "react";

export function ModalOpener(): [boolean, () => void] {
  const [isOpen, setOpen] = useState(false);

  const modalAction = () => setOpen((p) => !p);
  return [isOpen, modalAction];
}
