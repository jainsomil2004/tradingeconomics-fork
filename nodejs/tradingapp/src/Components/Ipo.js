import React, { useEffect, useState } from "react";

const Ipo = ({selectedCountry}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchIpo = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.tradingeconomics.com/ipo/country/${selectedCountry}?c=90a0b97001744a2:4wahphreop8ivut`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching peers data:", error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchIpo();
  }, [selectedCountry]);

  return (
    <div>
      <h2>Ipo Data</h2>
      {loading ? (
        <p>Loading...</p>
      ) : data.length > 0 ? (
        <table border="1" style={{ width: "100%", textAlign: "left" }}>
          <thead>
            <tr>
              <th>Country</th>
              <th>Date</th>
              <th>Ticker</th>
              <th>Exchange</th>
              <th>Symbol</th>
              <th>Name</th>
              <th>Value</th>
              <th>StartPrice</th>
              <th>Currency</th>
              <th>LastUpdate</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.Country}</td>
                <td>{item.Date}</td>
                <td>{item.Ticker}</td>
                <td>{item.Exchange}</td>
                <td>{item.Symbol}</td>
                <td>{item.Name}</td>
                <td>{item.Value}</td>
                <td>{item.StartPrice}</td>
                <td>{item.Currency}</td>
                <td>{item.LastUpdate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available for ipo.</p>
      )}
    </div>
  );
};

export default Ipo;
