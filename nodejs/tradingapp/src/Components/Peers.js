import React, { useEffect, useState } from "react";

const Peers = ({selectedCountry}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPeersData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.tradingeconomics.com/peers/country/${selectedCountry}/inflation%20rate?c=90a0b97001744a2:txzwr3kmjmhh6vm`
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

    fetchPeersData();
  }, [selectedCountry]);

  return (
    <div>
      <h2>Peers Data</h2>
      {loading ? (
        <p>Loading...</p>
      ) : data.length > 0 ? (
        <table border="1" style={{ width: "100%", textAlign: "left" }}>
          <thead>
            <tr>
              <th>Country</th>
              <th>Category</th>
              <th>Title</th>
              <th>Latest Value</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.Country}</td>
                <td>{item.Category}</td>
                <td>{item.Title}</td>
                <td>{item.LatestValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available for peers.</p>
      )}
    </div>
  );
};

export default Peers;
