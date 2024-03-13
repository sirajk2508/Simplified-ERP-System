import React from "react";

const BoxWrapper = ({children}) => {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex lg:items-center mb-[6px] lg:mb-0">
      {children}
    </div>
  );
};

export default BoxWrapper;
