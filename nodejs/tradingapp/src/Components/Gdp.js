import React, { useEffect, useState } from "react";
import "./Indicator.css";

const GdpTable = ({ selectedCountry }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
   
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
            `https://api.tradingeconomics.com/country/${ selectedCountry }/gdp?c=90a0b97001744a2:txzwr3kmjmhh6vm`

        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [ selectedCountry ]); 

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Gdp Table</h2>
      {data.length > 0 ? (
        <table border="1" style={{ width: "100%", textAlign: "left" }}>
          <thead>
            <tr>
              <th>Country</th>
              <th>Category</th>
              <th>Title</th>
              <th>LatestValueDate</th>
              <th>LatestValue</th>
              <th>Source</th>

              <th>Unit</th>
              
              <th>CategoryGroup</th>
            
              <th>Frequency</th>
              <th>HistoricalDataSymbol</th>
              <th>CreateDate</th>
              <th>FirstValueDate</th>
              <th>PreviousValue</th>
              <th>PreviousValueDate</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.Country}</td>
                <td>{item.Category}</td>
                <td>{item.Title}</td>
                <td>{item.LatestValueDate}</td>
                <td>{item.LatestValue}</td>
                <td>{item.Source}</td>
               
                <td>{item.Unit}</td>
               
                <td>{item.CategoryGroup}</td>
               
                <td>{item.Frequency}</td>
                <td>{item.HistoricalDataSymbol}</td>
                <td>{item.CreateDate}</td>
                <td>{item.FirstValueDate}</td>
                <td>{item.PreviousValue}</td>
                <td>{item.PreviousValueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available for the given query.</p>
      )}
    </div>
  );
};

export default GdpTable;
