import React from "react";

const Tooltip = ({ title, children }) => {
  return (
    <div className="space-x-3 space-y-3">
      <div
        className="relative before:z-10 before:absolute before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:rounded-lg before:bg-gray-700 before:px-2 before:py-1.5 before:text-white before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible"
        data-tip={title}
      >
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
