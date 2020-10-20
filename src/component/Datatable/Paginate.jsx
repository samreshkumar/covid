import React, { useState, useEffect, useMemo } from "react";
import Pagination from "react-bootstrap/Pagination";

const Paginate = ({
  total = 0,
  itemperpage = 10,
  currentpage = 1,
  onPageChange
}) => {
  const [totalpage, settotalpage] = useState(0);

  useEffect(() => {
    if (total > 0 && itemperpage > 0) {
      settotalpage(Math.ceil(total / itemperpage));
    }
  }, [total, itemperpage]);

  const paginationItems = useMemo(() => {
    const pages = [];
    for (let i = 1 ; i <= totalpage; i++) {
      pages.push(
        <Pagination.Item
          key={i}
          active={i === currentpage}
          onClick={() => onPageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }
    return pages;
  }, [totalpage, currentpage]);

  if (totalpage === 0) return null;

  return (
    <>
      <Pagination>
        <Pagination.Prev
          onClick={() => onPageChange(currentpage - 1)}
          disabled={currentpage === 1}
        />
        {paginationItems}
        <Pagination.Next
          onClick={() => onPageChange(currentpage + 1)}
          disabled={currentpage === totalpage}
        />
      </Pagination>
    </>
  );
};

export default Paginate;
