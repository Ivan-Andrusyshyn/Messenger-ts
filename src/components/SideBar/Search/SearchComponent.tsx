import React from "react";
import "./search.css";
interface Props {
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchComponent: React.FC<Props> = ({ handleOnChange }) => {
  return (
    <div className="input-container">
      <input type="text" id="name" placeholder=" " onChange={handleOnChange} />
      <label htmlFor="name">Name</label>
      <div className="underline"></div>
    </div>
  );
};
