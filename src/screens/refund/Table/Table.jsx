import React from "react";
import "./Table.scss";
import TableAction from "./TableAction";

const TABLE_HEADS = [
  "S.No",
   "Created On",
   "Dispute ID",
   "Transaction ID",
   "Dispute Reason",
   "Responded By",
   "Amount",
   "action",
   "Status"
];

const TABLE_DATA = [
  {
    sno: "1",
    created_on:"01,Feb,2024",
    dispute_id:"12345678",
    transaction_id:"12345678",
    dispute_reason:"charge back",
    responded_by:"02,Feb,2024",
    amount:"1500",
    status:"completed"
  },
  {
    sno: "1",
    created_on:"01,Feb,2024",
    dispute_id:"12345678",
    transaction_id:"12345678",
    dispute_reason:"charge back",
    responded_by:"02,Feb,2024",
    amount:"1500",
    status:"pending"
  },  
  {
    sno: "1",
    created_on:"01,Feb,2024",
    dispute_id:"12345678",
    transaction_id:"12345678",
    dispute_reason:"charge back",
    responded_by:"02,Feb,2024",
    amount:"1500",
    status:"failed"
  },
  // Add more data items here...
];

const Table = () => {
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
            {TABLE_DATA.map((dataItem, index) => (
              <tr key={dataItem.sno}>
                {/* Render table rows based on data */}
                <td>{index + 1}</td>
                <td>{dataItem.created_on}</td>
                <td>{dataItem.dispute_id}</td>
                <td>{dataItem.transaction_id}</td>
                <td>{dataItem.dispute_reason}</td>
                <td>{dataItem.responded_by}</td>
                <td>{dataItem.amount}</td>
                
                <td>
                  <button className="take-action-button"  onClick={() => handleAction(dataItem.dispute_id)}>TakeAction</button>
                </td>
                <td>{dataItem.status}</td>
                <td className="dt-cell-action">
                  <TableAction />
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
