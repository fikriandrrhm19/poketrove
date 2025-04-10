import { motion } from "framer-motion";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const range = 1;
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - range && i <= currentPage + range)
    ) {
      pages.push(i);
    } else if (
      i === currentPage - range - 1 ||
      i === currentPage + range + 1
    ) {
      pages.push("ellipsis-" + i);
    }
  }

  return (
    <div className="flex flex-wrap justify-center items-center gap-1 mt-6 text-sm">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="px-2 py-1 bg-[#DDE5F7] hover:bg-[#B3BFE4] active:scale-95 active:bg-[#CBD6F2] text-black rounded transition-all duration-200 disabled:opacity-50"
      >
        <span className="block sm:hidden">&lt;</span>
        <span className="hidden sm:block">Previous</span>
      </button>

      {pages.map((page, i) =>
        typeof page === "string" && page.startsWith("ellipsis") ? (
          <span key={page} className="px-2 py-1 text-gray-500">...</span>
        ) : (
          <motion.div
            key={page}
            whileHover={{ y: -4, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative group"
          >
            <button
              onClick={() => setCurrentPage(page)}
              className={`px-2 py-1 rounded transition-colors duration-200 active:scale-95 active:bg-blue-200 ${
                currentPage === page
                  ? "bg-[#7885B0] text-white"
                  : "bg-white border border-gray-300 group-hover:bg-blue-100"
              }`}
            >
              {page}
            </button>
          </motion.div>
        )
      )}

      <button
        onClick={() => setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))}
        disabled={currentPage === totalPages}
        className="px-2 py-1 bg-[#DDE5F7] hover:bg-[#B3BFE4] active:scale-95 active:bg-[#CBD6F2] transform transition-all duration-200 text-black rounded disabled:opacity-50"
      >
        <span className="block sm:hidden">&gt;</span>
        <span className="hidden sm:block">Next</span>
      </button>
    </div>
  );
};

export default Pagination;