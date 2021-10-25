import React, { useState, useEffect } from "react";
import ProtfolioList from "../protfolioLIst/ProtfolioList";
import "./protfolio.scss";
import { HTML, CSS, JavaScript, ReactJS, Node, Express } from "../../data";

const Protfolio = () => {
  const [selected, setSelected] = useState("html");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "html",
      title: "HTML",
    },
    {
      id: "css",
      title: "CSS",
    },
    {
      id: "javascript",
      title: "JavaScript",
    },
    {
      id: "reactjs",
      title: "ReactJS",
    },
    {
      id: "node",
      title: "Node",
    },
    {
      id: "express",
      title: "Express",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "html":
        setData(HTML);
        break;
      case "css":
        setData(CSS);
        break;
      case "javascript":
        setData(JavaScript);
        break;
      case "reactjs":
        setData(ReactJS);
        break;
      case "node":
        setData(Node);
        break;
      case "express":
        setData(Express);
        break;
      default:
        setData(HTML);
    }
  }, [selected]);

  return (
    <div className="protfolio" id="protfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <ProtfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((data) => (
          <div className="item">
            <img src={data.img} alt="" />
            <h3>{data.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Protfolio;
