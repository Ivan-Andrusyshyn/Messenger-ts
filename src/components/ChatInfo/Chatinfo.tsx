import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import "./chatinfo.css";
import { Loader } from "../loader/Loader";
import { Text } from "./TextChat/Text";
import React from "react";
interface APIEntry {
  API: string;
  Description?: string;
}
const Chatinfo: React.FC = () => {
  const { chatId } = useParams<{ chatId: string | undefined }>();
  const [list, setList] = useState<APIEntry[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("https://api.publicapis.org/entries");
        const listInfo: APIEntry[] = data.entries.slice(0, 20);
        const filter = listInfo.filter(({ API }) => API === chatId);
        setList(filter);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
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
