import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";

import CoinPage from "./routes/CoinPage";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [coins, setCoins] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true";

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
      setCoins(data);
    };
    fetchData();
  }, [url]);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home coins={coins} />}></Route>
        <Route path="/coin/:coinId" element={<CoinPage />}></Route>
        <Route path=":coinId" element={<CoinPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
