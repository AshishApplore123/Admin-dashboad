import AreaTableAction from "./TableAction";

import "./Table.scss";

const TABLE_HEADS = [
  "Serial No",
  "User ID",
  "Name",
  "Joining Date",
  "Email ID",
  "Phone Number",
  "Status",
];

const Table = ({
  tableData,
  searchQuery,
  selectedStatus,
  onUpdateTableData,
}) => {
  // Filter data based on selected status and search query
  const filteredData = tableData.filter(
    (item) =>
      (selectedStatus === "All" ||
        item.status.toLowerCase() === selectedStatus.toLowerCase()) &&
      (searchQuery === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()))
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
              <tr key={dataItem?.id}>
                {/* Render table rows based on filtered data */}
                <td>{index + 1}</td>
                <td>{dataItem?.id}</td>
                <td>{dataItem?.name}</td>
                <td>{dataItem?.createdAt}</td>
                <td>{dataItem?.email}</td>
                <td>{dataItem?.phoneNumber}</td>
                <td>
                  <div className="dt-status">
                    <span
                      className={`dt-status-dot dot-${dataItem?.status}`}
                    ></span>
                    <span className="dt-status-text">
                      {dataItem?.status === 1 ? "ACTIVE" : "DISABLED"}
                    </span>
                  </div>
                </td>
                <td className="dt-cell-action">
                  <AreaTableAction
                    currentUser={dataItem}
                    onUpdateTableData={onUpdateTableData}
                  />
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
