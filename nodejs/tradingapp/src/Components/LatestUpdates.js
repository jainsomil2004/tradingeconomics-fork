import React, { useEffect, useState } from "react";

const LatestUpdates = ({selectedCountry}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUpdatesData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.tradingeconomics.com/updates/country/${selectedCountry}?c=90a0b97001744a2:4wahphreop8ivut`
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

    fetchUpdatesData();
  }, [selectedCountry]);

  return (
    <div>
      <h2>Latest Updates</h2>
      {loading ? (
        <p>Loading...</p>
      ) : data.length > 0 ? (
        <table border="1" style={{ width: "100%", textAlign: "left" }}>
          <thead>
            <tr>
              <th>Country</th>
              <th>Category</th>
              <th>HistoricalDataSymbol</th>
              <th>LastUpdate</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.Country}</td>
                <td>{item.Category}</td>
                <td>{item.HistoricalDataSymbol}</td>
                <td>{item.LastUpdate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No Latest Updates available .</p>
      )}
    </div>
  );
};

export default LatestUpdates;
