import "./App.css";
import { Item } from "./Item";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getData } from "./utils";
import { useState, useEffect } from "react";
import ItemHeader from "./ItemHeader";

function App() {
  const [scholars, setScholars] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      setScholars(data);
    });
  }, []);

  const listItems = scholars.map((i, index) => (
    <Item
      key={index}
      index={index}
      name={i.name}
      pvpElo={i.pvpElo}
      rewards={i.rewards}
    />
  ));

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <h1>Axie Infinity Chile - Rewards Season 19</h1>

        <div className="table">
          <ItemHeader />

          {listItems}
        </div>
      </main>
    </div>
  );
}

export default App;
