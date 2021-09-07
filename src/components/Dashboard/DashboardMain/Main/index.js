import React, { useState, useEffect } from "react";
import {} from "./MainElements";
import Overview from "../Overview";

const Main = () => {
  const [query, setquery] = useState(null);
  const fetchData = async () => {
    // eslint-disable-next-line
    const res = await fetch("http://localhost:3002/getquery", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setquery(res));
  };
  useEffect(() => {
    fetchData();
  }, []);
  
  return <>{query === null ? <Overview></Overview> : <></>}</>;
};

export default Main;
