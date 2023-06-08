import { ChangeEvent, FC, useState } from "react";
import "./text.css";
import React from "react";
export const Text: FC = () => {
  const [text, setText] = useState("");
  const [textArray, setTextArray] = useState("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.currentTarget.value);
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTextArray(text);
  };
  return (
    <div className="text-container">
      {textArray && (
        <div className="message-wrap">
          <p>{textArray}</p>
        </div>
      )}
      <form className="chat-input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Введите сообщение"
          onChange={handleOnChange}
        />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};
