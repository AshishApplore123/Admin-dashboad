import "./Pagination.css";
const Pagination = ({ totalItems, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalItems; i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);
  return (
    <nav>
      <ul className="pagination">
        {currentPage > 1 && (
          <li>
            <button
              onClick={() => paginate(currentPage - 1)}
              className="page-link"
            >
              {"<"}
            </button>
          </li>
        )}
        {pageNumbers.map((number) => (
          <li key={number} className={currentPage === number ? "active" : ""}>
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
        {currentPage < pageNumbers.length && (
          <li>
            <button
              onClick={() => paginate(currentPage + 1)}
              className="page-link"
            >
              {">"}
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Pagination;







