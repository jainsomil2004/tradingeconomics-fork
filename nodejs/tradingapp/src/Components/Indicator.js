
// import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import "./Indicator.css";

// const Indicator = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // useEffect(() => {
//   //   if (indicatorType) {
//   //     fetchDataIndicator();
//   //   }
//   // }, [indicatorType, selectedCountry]);

//   const fetchDataIndicator = async () => {
//     setLoading(true);
//     let url = "";

//     switch (indicatorType) {
//       case "Peers":
//         url = `https://api.tradingeconomics.com/peers/country/mexico/inflation%20rate?c=90a0b97001744a2:txzwr3kmjmhh6vm`;
//         break;
//       case "Credit Ratings":
//         url = `https://api.tradingeconomics.com/credit-ratings/country/sweden?c=90a0b97001744a2:txzwr3kmjmhh6vm`;
//         break;
//       case "Latest Updates":
//         url = `https://api.tradingeconomics.com/updates/country/portugal?c=90a0b97001744a2:4wahphreop8ivut`;
//         break;
//       default:
//         setData([]);
//         setLoading(false);
//         return;
//     }

//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Error fetching ${indicatorType} data: ${response.statusText}`);
//       }
//       const result = await response.json();
//       setData(result);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setData([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!indicatorType) {
//     return <div>Please select an indicator from the menu.</div>;
//   }

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h2>Indicator Table</h2>
//       {data.length > 0 ? (
//         <table border="1" style={{ width: "100%", textAlign: "left" }}>
//           <thead>
//             <tr>
//               <th>Country</th>
//               <th>Category</th>
//               <th>Title</th>
//               <th>LatestValueDate</th>
//               <th>LatestValue</th>
//               <th>Source</th>

//               <th>Unit</th>
              
//               <th>CategoryGroup</th>
            
//               <th>Frequency</th>
//               <th>HistoricalDataSymbol</th>
//               <th>CreateDate</th>
//               <th>FirstValueDate</th>
//               <th>PreviousValue</th>
//               <th>PreviousValueDate</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, index) => (
//               <tr key={index}>
//                 {indicatorType === "IPO" ? (
//                 <>
//                    <td>{item.Country}</td>
//                     <td>{item.Category}</td>
//                     <td>{item.Title}</td>
//                     <td>{item.LatestValueDate}</td>
//                     <td>{item.LatestValue}</td>
//                     <td>{item.Source}</td>
                  
//                     <td>{item.Unit}</td>
                  
//                     <td>{item.CategoryGroup}</td>
                  
//                     <td>{item.Frequency}</td>
//                     <td>{item.HistoricalDataSymbol}</td>
//                     <td>{item.CreateDate}</td>
//                     <td>{item.FirstValueDate}</td>
//                     <td>{item.PreviousValue}</td>
//                     <td>{item.PreviousValueDate}</td>
//                 </>
//               ) : indicatorType === "Stock Split" ? (
//                 <>
//                    <td>{item.Country}</td>
//                   <td>{item.Category}</td>
//                   <td>{item.Title}</td>
//                   <td>{item.LatestValueDate}</td>
//                   <td>{item.LatestValue}</td>
//                   <td>{item.Source}</td>
                
//                   <td>{item.Unit}</td>
                
//                   <td>{item.CategoryGroup}</td>
                
//                   <td>{item.Frequency}</td>
//                   <td>{item.HistoricalDataSymbol}</td>
//                   <td>{item.CreateDate}</td>
//                   <td>{item.FirstValueDate}</td>
//                   <td>{item.PreviousValue}</td>
//                   <td>{item.PreviousValueDate}</td>
//                 </>
//               ) : indicatorType === "Earning Revenues" ? (
//                 <>
//                   <td>{item.Country}</td>
//                     <td>{item.Category}</td>
//                     <td>{item.Title}</td>
//                     <td>{item.LatestValueDate}</td>
//                     <td>{item.LatestValue}</td>
//                     <td>{item.Source}</td>
                  
//                     <td>{item.Unit}</td>
                  
//                     <td>{item.CategoryGroup}</td>
                  
//                     <td>{item.Frequency}</td>
//                     <td>{item.HistoricalDataSymbol}</td>
//                     <td>{item.CreateDate}</td>
//                     <td>{item.FirstValueDate}</td>
//                     <td>{item.PreviousValue}</td>
//                     <td>{item.PreviousValueDate}</td>
//                 </>
//               ) : (
//                 JSON.stringify(item)
//               )}
               
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No data available for the given query.</p>
//       )}
//     </div>
//   );
// };
// Indicator.propTypes = {
//   indicatorType: PropTypes.string.isRequired,
//   selectedCountry: PropTypes.string.isRequired,
// };

// export default Indicator;
