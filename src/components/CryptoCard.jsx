import React from "react";
import "./CryptoCard.css";

const CryptoCard = ({ crypto }) => {
  return (
    <div className="crypto-card">
      <img src={crypto.image} alt={crypto.name} className="crypto-img" />
      <h2>{crypto.name}</h2>
      <p>💲{crypto.current_price.toLocaleString()} USD</p>
      <p
        className={
          crypto.price_change_percentage_24h >= 0
            ? "positive"
            : "negative"
        }
      >
        {crypto.price_change_percentage_24h.toFixed(2)}%
      </p>
    </div>
  );
};

export default CryptoCard;
