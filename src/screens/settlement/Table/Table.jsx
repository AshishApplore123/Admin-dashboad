import React from "react";
import AreaTableAction from "./TableAction";
import "./Table.scss";

const TABLE_HEADS = [
  "Serial No",
  "Settlement Date",
  "Batch",
  "PayIn Amount",
  "PayIn Comm",
  "Rolling Reverse(Debt)",
  "Rolling Reverse(Credit)",
  "Chargeback(Debit)"

];

const TABLE_DATA = [
  {
    sno: "1",
    settlement_Date:"22Feb,2024",
    batch:"9:00AM-12:00PM",
    payin_amount:"123456789",
    payin_comm:"123456789",
    rolling_reverse_debt:"123456789",
    rolling_reverse_credit:"0",
    chargeback:"0"
  },
  {
    sno: "2",
    settlement_Date:"22Feb,2024",
    batch:"9:00AM-12:00PM",
    payin_amount:"123456789",
    payin_comm:"123456789",
    rolling_reverse_debt:"123456789",
    rolling_reverse_credit:"0",
    chargeback:"0"
  },
  {
    sno: "1",
    settlement_Date:"22Feb,2024",
    batch:"9:00AM-12:00PM",
    payin_amount:"123456789",
    payin_comm:"123456789",
    rolling_reverse_debt:"123456789",
    rolling_reverse_credit:"0",
    chargeback:"0"
  },
  {
    sno: "1",
    settlement_Date:"22Feb,2024",
    batch:"9:00AM-12:00PM",
    payin_amount:"123456789",
    payin_comm:"123456789",
    rolling_reverse_debt:"123456789",
    rolling_reverse_credit:"0",
    chargeback:"0"
  },
  {
    sno: "1",
    settlement_Date:"22Feb,2024",
    batch:"9:00AM-12:00PM",
    payin_amount:"123456789",
    payin_comm:"123456789",
    rolling_reverse_debt:"123456789",
    rolling_reverse_credit:"0",
    chargeback:"0"
  },
   {
    sno: "1",
    settlement_Date:"22Feb,2024",
    batch:"9:00AM-12:00PM",
    payin_amount:"123456789",
    payin_comm:"123456789",
    rolling_reverse_debt:"123456789",
    rolling_reverse_credit:"0",
    chargeback:"0"
  },
];

const Table = ({ searchQuery, selectedStatus }) => {
  // Filter data based on selected status and search query
  const filteredData = TABLE_DATA.filter(item => 
    (selectedStatus === "All" || item.status.toLowerCase() === selectedStatus.toLowerCase()) && 
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
                <td>{dataItem.settlement_Date}</td>
                <td>{dataItem.batch}</td>
                <td>{dataItem.payin_amount}</td>
                <td>{dataItem.payin_comm}</td>
                <td>{dataItem.rolling_reverse_debt}</td>
                <td>{dataItem.rolling_reverse_credit}</td>
                <td>{dataItem.chargeback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
