import React, { useEffect, useState } from "react";

const PointInTime = ({ selectedCountry }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPointInTime = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `https://api.tradingeconomics.com/calendar/country/united%20states/indicator/initial%20jobless%20claims/2016-12-01/2017-02-25?c=guest:guest`
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

        fetchPointInTime();
    }, [selectedCountry]);

    return (
        <div>
            <h2>Point In Time Data</h2>
            {loading ? (
                <p>Loading...</p>
            ) : data.length > 0 ? (
                <table border="1" style={{ width: "100%", textAlign: "left" }}>
                    <thead>
                        <tr>
                            <th>CalendarId</th>
                            <th>Date</th>
                            <th>Country</th>
                            <th>Category</th>
                            <th>Event</th>
                            <th>Reference</th>
                            <th>ReferenceDate</th>
                            <th>Source</th>
                            <th>SourceURL</th>
                            <th>Actual</th>
                            <th>Previous</th>
                            <th>Forecast</th>
                            <th>TEForecast</th>
                            <th>URL</th>
                            <th>DateSpan</th>
                            <th>Importance</th>
                            <th>LastUpdate</th>
                            
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.CalendarId}</td>
                                <td>{item.Date}</td>
                                <td>{item.Country}</td>
                                <td>{item.Category}</td>
                                <td>{item.Event}</td>
                                <td>{item.Reference}</td>
                                <td>{item.ReferenceDate}</td>
                                <td>{item.Source}</td>
                                <td>{item.SourceURL}</td>
                                <td>{item.Actual}</td>
                                <td>{item.Previous}</td>
                                <td>{item.Forecast}</td>
                                <td>{item.TEForecast}</td>
                                <td>{item.URL}</td>
                                <td>{item.DateSpan}</td>
                                <td>{item.Importance}</td>
                                <td>{item.LastUpdate}</td>
                            
                                
                               

                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No data available for Point In Time.</p>
            )}
        </div>
    );
};

export default PointInTime;
