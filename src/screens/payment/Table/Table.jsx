import React, { useState, useEffect } from "react";
import AreaTableAction from "./TableAction";
import "./Table.scss";

const TABLE_HEADS = [
  "Serial No",
  "Reference ID",
  "Sender Name",
  "Sender VPA",
  "Receiver VPA",
  "Amount",
  "Status",
  "Transaction Date"
];

const Table = ({ searchQuery, selectedStatus, currentDateAndTime }) => {
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let token = localStorage.getItem('token');
      const response = await fetch("https://pg-wrapper.applore.in/v1/admin/transactions", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Unauthorized: Please check your authentication credentials.");
        } else {
          throw new Error("Failed to fetch data");
        }
      }

      const data = await response.json();
      setTableData(data.data); 
    } catch (error) {
      setError(error.message);
      console.error("Error fetching data:", error);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Filter data based on selected payment status and search query
  const filteredData = tableData.filter(
    item =>
      (selectedStatus === "All" || item.resposne.data.status === selectedStatus) &&
      (searchQuery === "" || item.request.sender_name.toLowerCase().includes(searchQuery.toLowerCase()))
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
              <tr key={dataItem.id}>
                
                <td>{index + 1}</td>
                <td>{dataItem.referenceId}</td>
                <td>{dataItem.request.sender_name}</td>
                <td>{dataItem.request.sender_vpa}</td>
                <td>{dataItem.request.receiver_vpa}</td>
                <td>{dataItem.request.amount}</td>
                <td>{dataItem.resposne.data.status}</td>
                <td>{new Date(dataItem.createdAt).toLocaleDateString()}</td>
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
