import React from "react";
import AreaTableAction from "./TableAction";
import "./Table.scss";

const TABLE_HEADS = [
  "Serial No",
  "User ID",
  "Name",
  "Joining Date",
  "Email ID",
  "Phone Number",
  "Status"
];

const TABLE_DATA = [
  {
    sno: "1",
    user_id: "123456789",
    name: "John Doe",
    joining_date: "01,Feb,2024",
    email_id: "john@gmail.com",
    phone_no: "9999999999",
    status: "active"
  },
  {
    sno: "2",
    user_id: "123456789",
    name: "ashish",
    joining_date: "01,Feb,2024",
    email_id: "john@gmail.com",
    phone_no: "9999999999",
    status: "inactive"
  },
  {
    sno: "3",
    user_id: "123456789",
    name: "xyz",
    joining_date: "01,Feb,2024",
    email_id: "john@gmail.com",
    phone_no: "9999999999",
    status: "active"
  },
  {
    sno: "4",
    user_id: "123456789",
    name: "ashish",
    joining_date: "01,Feb,2024",
    email_id: "john@gmail.com",
    phone_no: "9999999999",
    status: "inactive"
  },
  {
    sno: "5",
    user_id: "123456789",
    name: "ashish",
    joining_date: "01,Feb,2024",
    email_id: "john@gmail.com",
    phone_no: "9999999999",
    status: "inactive"
  }
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
                <td>{dataItem.user_id}</td>
                <td>{dataItem.name}</td>
                <td>{dataItem.joining_date}</td>
                <td>{dataItem.email_id}</td>
                <td>{dataItem.phone_no}</td>
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
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;

