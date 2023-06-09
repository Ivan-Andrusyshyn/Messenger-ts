import axios from "axios";
import "./sidebar.css";

import React, { FC, useEffect, useState, ChangeEvent, Suspense } from "react";
import { Link, Outlet, useLoaderData, useLocation } from "react-router-dom";
import { SearchComponent } from "./Search/SearchComponent";
import { Loader } from "../loader/Loader";
type Contact = {
  API: string;
};

type SidebarProps = {};

const Sidebar: FC<SidebarProps> = () => {
  const [list, setList] = useState<Contact[]>([]);
  const [newPath, setNewPath] = useState<string>("");
  const { pathname } = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://api.publicapis.org/entries");
        const listInfo = data.entries.slice(10, 20);
        const localList = JSON.parse(
          localStorage.getItem("contact") || "[]"
        ) as Contact[];
        setList(localList ?? listInfo);
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
  const deleteOnCLick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const search = e.currentTarget.id;
    const localList = JSON.parse(
      localStorage.getItem("contact") || "[]"
    ) as Contact[];
    const filtered = localList.filter(({ API }) => API !== search);
    setList(filtered);
    setNewPath(pathname);
    localStorage.setItem("contact", JSON.stringify(filtered));
  };
  const randomOnline = (): string | undefined => {
    const random = Math.floor(Math.random() * 10);
    if (random > 5 && list.length === 10) {
      return "#00FF00";
    } else if (random < 5 && list.length === 10) {
      return "#333333";
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
                to={`${newPath ? newPath : API}`}
                className="contact"
                key={API}
              >
                <span className="name">{API}</span>
                <span className="status" style={{ color: `${randomOnline()}` }}>
                  Online
                </span>
                <button className="btn_item" id={API} onClick={deleteOnCLick}>
                  X
                </button>
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
