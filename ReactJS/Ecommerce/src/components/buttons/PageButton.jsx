/* eslint-disable react/prop-types */

const PageButton = ({ currentPage, setCurrentPage, pageIndx }) => {
  return (
    <button
      id={pageIndx}
      onClick={() => setCurrentPage(pageIndx)}
      className={`px-3 py-1 rounded ${
        currentPage === pageIndx ? "bg-blue-500 text-white" : "bg-gray-200"
      }`}
    >
      {pageIndx}
    </button>
  );
};

export default PageButton;
