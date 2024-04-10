import "./Table.scss";
const TABLE_HEADS = [
  "Serial No",
  "Reference ID",
  "Sender Name",
  "Sender VPA",
  "Receiver VPA",
  "Amount",
  "Status",
  "Transaction Date",
];
const Table = ({ tableData, currentPage, itemsPerPage }) => {
  const startingSerialNumber = (currentPage - 1) * itemsPerPage + 1;
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
            {tableData.map((dataItem, index) => (
              <tr key={dataItem.id}>
                <td>{startingSerialNumber + index}</td>{" "}
                <td>{dataItem.referenceId}</td>
                <td>{dataItem.request.sender_name}</td>
                <td>{dataItem.request.sender_vpa}</td>
                <td>{dataItem.request.receiver_vpa}</td>
                <td>{dataItem.request.amount}</td>
                <td>{dataItem.resposne.data?.status}</td>
                <td>{new Date(dataItem.createdAt).toLocaleDateString()}</td>
                <td className="dt-cell-action">{/* <AreaTableAction /> */}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
export default Table;
