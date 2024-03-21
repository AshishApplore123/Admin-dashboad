import React from "react";
import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";

const TABLE_HEADS = [
  "S.No",
  "Invoice Date",
  "Invoice Period",
  "Amount",
  "Payment Status"
];

const TABLE_DATA = [
  {
    sno: "1",
    invoice_date: "01/02/24",
    invoice_period: "01/02/24 - 01/03/24",
    amount: "1500",
    status: "complete"
  },
  {
    sno: "2",
    invoice_date: "01/02/24",
    invoice_period: "01/02/24 - 01/03/24",
    amount: "1500",
    status: "complete"
  },
  {
    sno: "3",
    invoice_date: "01/02/24",
    invoice_period: "01/02/24 - 01/03/24",
    amount: "1500",
    status: "failed"
  },
  {
    sno: "4",
    invoice_date: "01/02/24",
    invoice_period: "01/02/24 - 01/03/24",
    amount: "1500",
    status: "complete"
  },
  {
    sno: "5",
    invoice_date: "01/02/24",
    invoice_period: "01/02/24 - 01/03/24",
    amount: "1500",
    status: "pending"
  },
];

const AreaTable = () => {
  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Latest Orders</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA.map((dataItem, index) => {
              return (
                <tr key={index}>
                  <td>{dataItem.sno}</td>
                  <td>{dataItem.invoice_date}</td>
                  <td>{dataItem.invoice_period}</td>
                  <td>{dataItem.amount}</td>
                  <td>
                    <div className="dt-status">
                      <span
                        className={`dt-status-dot dot-${dataItem.status}`}
                      ></span>
                      <span className="dt-status-text">{dataItem.status}</span>
                    </div>
                  </td>
                  <td className="dt-cell-action">
                    <AreaTableAction />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AreaTable;
