import React, { useState } from "react";
import "../css_styles/coinsearch.css";
import { Link } from "react-router-dom";

const CoinSearch = ({ coins }) => {
  const [searhCoin, setSearchCoin] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const coinsPerPage = 10;

  // Filter coins based on search
  const filteredCoins = coins.filter((coin) => {
    if (searhCoin === "") {
      return coin;
    } else if (coin.name.toLowerCase().includes(searhCoin.toLowerCase())) {
      return coin;
    }
  });

  // Pagination logic
  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = filteredCoins.slice(indexOfFirstCoin, indexOfLastCoin);

  const totalPages = Math.ceil(filteredCoins.length / coinsPerPage);

  return (
    <div className="coin-search">
      <div className="search-div">
        <span>Search </span>
        <form>
          <input
            type="text"
            placeholder="Search a coin"
            onChange={(e) => {
              setSearchCoin(e.target.value);
              setCurrentPage(1); // Reset to page 1 when search changes
            }}
          />
        </form>
      </div>

      <div className="table-div">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Coin Image</th>
              <th>Name</th>
              <th>Price($)</th>
              <th>24h Change</th>
              <th>24h Volume</th>
              <th>Mkt</th>
            </tr>
          </thead>

          <tbody>
            {currentCoins.map((coin) => (
              <tr
                key={coin.id}
                className="coin-row"
                onClick={() => (window.location.href = `/coin/${coin.id}`)}
                style={{ cursor: "pointer" }}
              >
                <td>{coin.market_cap_rank}</td>
                <td>
                  <div>
                    <img src={coin.image} alt="img" />
                  </div>
                </td>
                <td>{coin.name}</td>
                <td>{coin.current_price.toLocaleString()}</td>
                {coin.price_change_percentage_24h > 0 ? (
                  <td className="text-color1">
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </td>
                ) : (
                  <td className="text-color2">
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </td>
                )}
                <td>{coin.total_volume.toLocaleString()}</td>
                <td>{coin.market_cap.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination buttons */}
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={currentPage === index + 1 ? "active-page" : ""}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoinSearch;
