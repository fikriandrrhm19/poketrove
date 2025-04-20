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
        className="px-2 py-1 rounded transition-all duration-200
                   bg-blue-100 hover:bg-blue-200 active:bg-blue-300 text-black
                   dark:bg-gray-700 dark:hover:bg-gray-600 dark:active:bg-gray-500 dark:text-white
                   disabled:opacity-50"
      >
        <span className="block sm:hidden">&lt;</span>
        <span className="hidden sm:block">Previous</span>
      </button>

      {pages.map((page) =>
        typeof page === "string" && page.startsWith("ellipsis") ? (
          <span key={page} className="px-2 py-1 text-gray-500 dark:text-gray-400">...</span>
        ) : (
          <motion.div
            key={page}
            whileHover={{ y: -4, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative group"
          >
            <button
              onClick={() => setCurrentPage(page)}
              className={`px-2 py-1 rounded transition-colors duration-200 active:scale-95
                ${
                  currentPage === page
                    ? "bg-blue-700 text-white dark:bg-blue-500"
                    : "bg-white text-black border border-gray-300 hover:bg-blue-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
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
        className="px-2 py-1 rounded transition-all duration-200
                   bg-blue-100 hover:bg-blue-200 active:bg-blue-300 text-black
                   dark:bg-gray-700 dark:hover:bg-gray-600 dark:active:bg-gray-500 dark:text-white
                   disabled:opacity-50"
      >
        <span className="block sm:hidden">&gt;</span>
        <span className="hidden sm:block">Next</span>
      </button>
    </div>
  );
};

export default Pagination;
