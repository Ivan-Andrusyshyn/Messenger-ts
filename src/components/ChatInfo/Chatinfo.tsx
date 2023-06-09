import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./chatinfo.css";
import { Loader } from "../Loader/Loader";
import { Text } from "./TextChat/Text";
import React from "react";
import { fetchTextChat } from "../dataFetch/dataFetch";
interface chatIdParams extends Record<string, string | undefined> {
  chatId: string;
}
interface APIEntry {
  API: string;
  Description?: string;
}
const Chatinfo: React.FC = () => {
  const { chatId } = useParams<chatIdParams>();
  const [list, setList] = useState<APIEntry[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const validChatId = chatId || "";
    fetchTextChat(validChatId, setLoading, setList);
  }, [chatId]);

  return (
    <div className="item">
      {loading ? (
        <Loader />
      ) : (
        list.map(({ API, Description }) => (
          <div key={API} className="name-contact">
            <h1 className="title">{API}</h1>
            <p className="description">{Description}</p>
          </div>
        ))
      )}
      <Text />
    </div>
  );
};

export default Chatinfo;
