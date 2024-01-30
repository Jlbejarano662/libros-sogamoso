import React from "react";

import "./Pagination.css";

const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className='pagination py-8'>
            {pages.map((page, index) => {
                return (
                    <a
                        href="#"
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page === currentPage ? "active" : ""}>
                        {page}
                    </a>
                );
            })}
        </div>
    );
};

export default Pagination;