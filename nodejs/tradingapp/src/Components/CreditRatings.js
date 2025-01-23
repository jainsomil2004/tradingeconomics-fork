import React, { useEffect, useState } from "react";
import "./Indicator.css";

const CreditRatings = ({selectedCountry}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchCreditRatingsData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.tradingeconomics.com/credit-ratings/country/${selectedCountry}?c=90a0b97001744a2:4wahphreop8ivut`
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

    fetchCreditRatingsData();
  }, [selectedCountry]);
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Credit Ratings Data</h2>
      {loading ? (
        <p>Loading...</p>
      ) : data.length > 0 ? (
        <table border="1" style={{ width: "100%", textAlign: "left" }}>
          <thead>
            <tr>
              <th>Country</th>
              <th>Date</th>
              <th>Agency</th>
              <th>Rating</th>
              <th>Outlook</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.Country}</td>
                <td>{item.Date}</td>
                <td>{item.Agency}</td>
                <td>{item.Rating}</td>
                <td>{item.Outlook}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available for Credit Ratings.</p>
      )}
    </div>
  );
};

export default CreditRatings;
