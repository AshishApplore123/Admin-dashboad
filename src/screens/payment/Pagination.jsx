import React from 'react';
import "./Pagination.css";



const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {currentPage > 1 && (
          <li>
            <a onClick={() => paginate(currentPage - 1)} href='!#' className='page-link'>
              {'<'}
            </a>
          </li>
        )}

        {pageNumbers.map(number => (
          <li key={number} className={currentPage === number ? 'active' : ''}>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}

        {currentPage < pageNumbers.length && (
          <li>
            <a onClick={() => paginate(currentPage + 1)} href='!#' className='page-link'>
              {'>'}
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
