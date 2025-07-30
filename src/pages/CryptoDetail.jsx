import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CryptoDetail = () => {
  const { id } = useParams();
  const [crypto, setCrypto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}`
        );
        setCrypto(data);
      } catch (error) {
        console.error("Error fetching crypto details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, [id]);

  if (loading) return <div>Cargando...</div>;
  if (!crypto) return <div>No se encontró la criptomoneda</div>;

  return (
    <div className="crypto-detail">
      <h1>{crypto.name} ({crypto.symbol.toUpperCase()})</h1>
      <img src={crypto.image.large} alt={crypto.name} width="100" />
      
      <div className="detail-grid">
        <div>
          <h3>Precio Actual</h3>
          <p>${crypto.market_data.current_price.usd.toLocaleString()}</p>
        </div>
        <div>
          <h3>Capitalización de Mercado</h3>
          <p>${crypto.market_data.market_cap.usd.toLocaleString()}</p>
        </div>
        <div>
          <h3>Volumen (24h)</h3>
          <p>${crypto.market_data.total_volume.usd.toLocaleString()}</p>
        </div>
        <div>
          <h3>Cambio (24h)</h3>
          <p className={crypto.market_data.price_change_percentage_24h >= 0 ? "positive" : "negative"}>
            {crypto.market_data.price_change_percentage_24h.toFixed(2)}%
          </p>
        </div>
      </div>

      <h2>Descripción</h2>
      <p dangerouslySetInnerHTML={{ __html: crypto.description.es || crypto.description.en }} />
    </div>
  );
};

export default CryptoDetail; 