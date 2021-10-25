import React from "react";
import "./protfolioList.scss";

const ProtfolioList = ({id, title,active,setSelected }) => {

  return (
    <li className={active ? "protfolioList active" : "protfolioList"} onClick={() => setSelected(id)}>
      
      {title}
    </li>
  )
};

export default ProtfolioList;
