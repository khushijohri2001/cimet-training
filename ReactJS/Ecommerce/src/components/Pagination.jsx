/* eslint-disable react/prop-types */
const Pagination = ({
  PageButton,
  totalPages,
  currentPage,
  setCurrentPage,
}) => {


  const pageButtonList = Array(totalPages)
    .fill(0)
    .map((_, index) => (
      <PageButton
        key={index + 1}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageIndx={index + 1}
      />
    ));

  return (
    <div className="flex gap-6 items-center">
      <button
        onClick={() => currentPage > 1 && setCurrentPage((prev) => prev - 1)}
        className={`${currentPage === 1 && "bg-gray-500 cursor-default"} p-2 rounded border border-black`}
      >
        Prev
      </button>
      <div className="flex gap-2">{
        pageButtonList
        }</div>
      <button onClick={() => currentPage < totalPages && setCurrentPage((prev) => prev + 1)} className={`${currentPage > totalPages - 1 && "bg-gray-500 cursor-default"} p-2 rounded border border-black`} >Next</button>
    </div>
  );
};

export default Pagination;
