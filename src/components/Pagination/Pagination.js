import React from "react";
import "./Pagination.scss";

const Pagination = (props) => {
  console.log(props);
  const { onLeftClick, onRightClick, page, totalPages } = props;
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <button
          className="page-link"
          onClick={onLeftClick}
          aria-label="Previous"
        >
          <span aria-hidden="true">&laquo;</span>
        </button>
        <div className="paginationText">
          {page} de {totalPages}
        </div>
        <button onClick={onRightClick} className="page-link" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </button>
      </ul>
    </nav>
  );
};

export default Pagination;
