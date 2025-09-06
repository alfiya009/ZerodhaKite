
import React, { useState, useEffect } from "react";
import axios, { all } from "axios";
import { VerticalGraph } from "./VerticalGraph";

// import { holdings } from "../data/data";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
  axios.get("https://zerodhaa-w4i7.onrender.com/allHoldings").then((res) => {
      // console.log(res.data);
      setAllHoldings(res.data);
    });
  }, []);

  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  // export const data = {
  //   labels,
  //   datasets: [
  // {
  //   label: 'Dataset 1',
  //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
  // },
  //     {
  //       label: 'Dataset 2',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  //   ],
  // };


  // Suggestion logic
  const buySuggestions = allHoldings.filter(stock => ((stock.price - stock.avg) / stock.avg) < -0.05);
  const sellSuggestions = allHoldings.filter(stock => ((stock.price - stock.avg) / stock.avg) > 0.10);

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      {/* Suggestions Section */}
      <div className="suggestions" style={{marginBottom: '1rem'}}>
        <h4>Stock Suggestions</h4>
        <div>
          <strong>Consider Buying:</strong>
          {buySuggestions.length > 0 ? (
            <ul>
              {buySuggestions.map((stock, idx) => (
                <li key={idx}>{stock.name} (Current price dropped more than 5% below avg)</li>
              ))}
            </ul>
          ) : <span> No buy suggestions right now.</span>}
        </div>
        <div>
          <strong>Consider Selling:</strong>
          {sellSuggestions.length > 0 ? (
            <ul>
              {sellSuggestions.map((stock, idx) => (
                <li key={idx}>{stock.name} (Current price increased more than 10% above avg)</li>
              ))}
            </ul>
          ) : <span> No sell suggestions right now.</span>}
        </div>
      </div>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {allHoldings.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{curValue.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
