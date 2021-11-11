import "./App.css";
import { Item } from "./Item";
import AxieLogo from "./assets/img/logo.png";
import "react-loading-skeleton/dist/skeleton.css";
import { getData } from "./utils";
import { useState, useEffect } from "react";
import ItemHeader from "./ItemHeader";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiTelegramFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { IconContext } from "react-icons";
const telegramChannel = "https://t.me/joinchat/91fRo7oHNOsyMDUx";
const twitter = "https://twitter.com/AxieChile";
const instagram = "https://www.instagram.com/axiechileacademia";

function App() {
  const [scholars, setScholars] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    getData().then((data) => {
      setTimeout(() => {
        setScholars(data);
        setLoadingData(false);
      },700)

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

  const loader = <p class="loader">Fetching data...</p>;

  return (
    <div className="App">
      <header>
        <img src={AxieLogo} alt="Axie" className="logo" />
      </header>
      <main>
        <h1>Axie Infinity Chile - Rewards Season 19</h1>

        <div className="table">
          <ItemHeader />

        
          { loadingData ? loader : listItems}
        </div>
      </main>
      <footer>
        <IconContext.Provider value={{ className: "icons", size: "38px" }}>
          <div>
            <a href={twitter} rel="noreferrer" target="_blank">
              <AiFillTwitterCircle />
            </a>
            <a href={instagram} rel="noreferrer" target="_blank">
              <AiFillInstagram />
            </a>
            <a href={telegramChannel} rel="noreferrer" target="_blank">
              <RiTelegramFill />
            </a>
          </div>
        </IconContext.Provider>

        <p>&copy; Copyright AxieChile. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
