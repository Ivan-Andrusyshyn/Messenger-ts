import { FC } from "react";
import React from "react";
import "./buttons.css";
type ButtonsNavProps = {
  nextContacts: (e: React.MouseEvent<HTMLButtonElement>) => void;
  backContacts: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
export const ButtonsNav: FC<ButtonsNavProps> = ({
  nextContacts,
  backContacts,
}) => {
  return (
    <div className="button-container">
      <button type="button" className="button-back" onClick={backContacts}>
        Назад
      </button>
      <button type="button" className="button-forward" onClick={nextContacts}>
        Вперед
      </button>
    </div>
  );
};
