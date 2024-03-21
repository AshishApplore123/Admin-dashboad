import React from "react";
import AreaTableAction from "./TableAction";
import "./Table.scss";

const TABLE_HEADS = [
  "Serial No",
  "Transaction ID",
  "Name",
  "Email ID",
  "Payment Date",
  "Payment Amount",
  "Payment Type",
  "Payment Status"
];
const TABLE_DATA = [
  {
    sno: "1",
    transaction_id: "123456789",
    name: "John Doe",
    email_id: "john@gmail.com",
    payment_date: "01Feb,2024",
    payment_amount: "15000",
    payment_type: "NEFT",
    payment_status: "completed"
  },
  {
    sno: "2",
    transaction_id: "123456789",
    name: "John Doe",
    email_id: "john@gmail.com",
    payment_date: "01Feb,2024",
    payment_amount: "15000",
    payment_type: "NEFT",
    payment_status: "pending"
  },
  {
    sno: "3",
    transaction_id: "123456789",
    name: "John Doe",
    email_id: "john@gmail.com",
    payment_date: "01Feb,2024",
    payment_amount: "15000",
    payment_type: "NEFT",
    payment_status: "failed"
  },
  {
    sno: "4",
    transaction_id: "123456789",
    name: "John Doe",
    email_id: "john@gmail.com",
    payment_date: "01Feb,2024",
    payment_amount: "15000",
    payment_type: "NEFT",
    payment_status: "completed"
  },
  {
    sno: "5",
    transaction_id: "123456789",
    name: "John Doe",
    email_id: "john@gmail.com",
    payment_date: "01Feb,2024",
    payment_amount: "15000",
    payment_type: "NEFT",
    payment_status: "pending"
  },
  {
    sno: "6",
    transaction_id: "123456789",
    name: "Ashish",
    email_id: "john@gmail.com",
    payment_date: "01Feb,2024",
    payment_amount: "15000",
    payment_type: "NEFT",
    payment_status: "failed"
  },
];
const Table = ({ searchQuery, selectedStatus }) => {
  // Filter data based on selected payment status and search query
  const filteredData = TABLE_DATA.filter(item => 
    (selectedStatus === "All" || item.payment_status === selectedStatus) && 
    (searchQuery === "" || item.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section className="content-area-table">
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
            {filteredData.map((dataItem, index) => (
              <tr key={dataItem.sno}>
                {/* Render table rows based on filtered data */}
                <td>{index + 1}</td>
                <td>{dataItem.transaction_id}</td>
                <td>{dataItem.name}</td>
                <td>{dataItem.email_id}</td>
                <td>{dataItem.payment_date}</td>
                <td>{dataItem.payment_amount}</td>
                <td>{dataItem.payment_type}</td>
                <td>
                  <div className="dt-status">
                    <span
                      className={`dt-status-dot dot-${dataItem.payment_status}`}
                    ></span>
                    <span className="dt-status-text">{dataItem.payment_status}</span>
                  </div>
                </td>
                <td className="dt-cell-action">
                  <AreaTableAction />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
