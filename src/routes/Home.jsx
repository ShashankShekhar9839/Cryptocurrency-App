import React from "react";
import CoinSearch from "../components/CoinSearch";
import Trending from "../components/Trending";
import "../css_styles/home.css";

const Home = (props) => {
  return (
    <div className="home">
      <CoinSearch coins={props.coins} />
      <div className="home-div2">
        <Trending />
      </div>
    </div>
  );
};

export default Home;
