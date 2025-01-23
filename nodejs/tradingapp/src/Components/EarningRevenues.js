import React, { useEffect, useState } from "react";

const EarningRevenues = ({ selectedCountry }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchEarningRevenues = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `https://api.tradingeconomics.com/earnings-revenues/country/${selectedCountry}?c=90a0b97001744a2:4wahphreop8ivut`
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

        fetchEarningRevenues();
    }, [selectedCountry]);

    return (
        <div>
            <h2>Earning Revenues Data</h2>
            {loading ? (
                <p>Loading...</p>
            ) : data.length > 0 ? (
                <table border="1" style={{ width: "100%", textAlign: "left" }}>
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Forecast</th>
                            <th>ForecastValue</th>
                            <th>Previous</th>
                            <th>PreviousValue</th>
                            <th>RevenueForecast</th>
                        
                            <th>RevenuePrevious</th>
                            
                            <th>MarketCapUSD</th>
                            <th>FiscalTag</th>
                            <th>FiscalReference</th>
                            <th>CalendarReference</th>
                            <th>Currency</th>
                            <th>Importance</th>
                            <th>Session</th>
                            <th>MarketRelease</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.Country}</td>
                                <td>{item.Forecast}</td>
                                <td>{item.ForecastValue}</td>
                                <td>{item.Previous}</td>
                                <td>{item.PreviousValue}</td>
                                <td>{item.RevenueForecast}</td>
                                
                                <td>{item.RevenuePrevious}</td>
                               
                                <td>{item.MarketCapUSD}</td>
                                <td>{item.FiscalTag}</td>
                                <td>{item.FiscalReference}</td>
                                <td>{item.CalendarReference}</td>
                                
                                <td>{item.Currency}</td>
                                <td>{item.Importance}</td>
                                <td>{item.Session}</td>
                                <td>{item.MarketRelease}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No data available for Earning Revenues.</p>
            )}
        </div>
    );
};

export default EarningRevenues;
