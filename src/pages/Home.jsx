import React, { useState, useEffect } from "react";
import axios from "axios";
import CryptoCard from "../components/CryptoCard";
import SearchBar from "../components/SearchBar";
import "./Home.css";

const Home = () => {
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20")
      .then((res) => setCryptos(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const filteredCryptos = cryptos.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    
    <main className="home-container">
      <h1>Explora Criptomonedas</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="crypto-grid">
        {filteredCryptos.map((crypto) => (
          <CryptoCard key={crypto.id} crypto={crypto} />
        ))}
      </div>
    </main>
    
  );
};

export default Home;