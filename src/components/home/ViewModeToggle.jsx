import { LayoutList, LayoutGrid } from "lucide-react";

const ViewModeToggle = ({ mobileViewMode, setMobileViewMode }) => {
  const baseButton = "w-10 h-10 flex items-center justify-center transition";
  const baseIcon = "transition-colors";

  return (
    <>
      <button
        onClick={() => setMobileViewMode("single")}
        className={`${baseButton} ${
          mobileViewMode === "single" ? "bg-[#58618A]" : "hover:bg-[#05091B]"
        }`}
      >
        <LayoutList
          size={20}
          className={`${baseIcon} ${
            mobileViewMode === "single"
              ? "text-white"
              : "text-[#252A3E] dark:text-white"
          }`}
        />
      </button>
      <button
        onClick={() => setMobileViewMode("double")}
        className={`${baseButton} ${
          mobileViewMode === "double" ? "bg-[#58618A]" : "hover:bg-[#05091B]"
        }`}
      >
        <LayoutGrid
          size={20}
          className={`${baseIcon} ${
            mobileViewMode === "double"
              ? "text-white"
              : "text-[#252A3E] dark:text-white"
          }`}
        />
      </button>
    </>
  );
};


export default ViewModeToggle;
