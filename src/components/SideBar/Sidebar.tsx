import axios from "axios";
import "./sidebar.css";
import React, { FC, useEffect, useState, ChangeEvent, Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import { SearchComponent } from "./Search/SearchComponent";
import { Loader } from "../loader/Loader";
type Contact = {
  API: string;
};

type SidebarProps = {};

const Sidebar: FC<SidebarProps> = () => {
  const [list, setList] = useState<Contact[]>([]);
  const [colorLink, setColorLink] = useState<string>("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://api.publicapis.org/entries");
        const listInfo = data.entries.slice(10, 20);
        localStorage.setItem("contact", JSON.stringify(listInfo));
        setList(listInfo);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const search = e.currentTarget.value.toLowerCase();
    const localList = JSON.parse(
      localStorage.getItem("contact") || "[]"
    ) as Contact[];
    const filtered = localList.filter(({ API }) =>
      API.toLowerCase().includes(search)
    );
    setList(filtered);
  };

  const randomOnline = (): string => {
    const random = Math.floor(Math.random() * 10);
    if (random > 5) {
      return "#8FBC8F";
    } else {
      return "#88888844";
    }
  };

  return (
    <div className="main">
      <header className="header">Messenger</header>
      <div className="container">
        <div className="sidebar">
          <SearchComponent handleOnChange={handleOnChange} />
          {list.map(({ API }) => {
            return (
              <Link
                to={`${API}`}
                style={{ backgroundColor: `${randomOnline()}` }}
                className="contact"
                key={API}
              >
                <span className="name">{API}</span>
                <span className="status">Online</span>
              </Link>
            );
          })}
        </div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default Sidebar;
