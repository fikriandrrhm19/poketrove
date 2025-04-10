import { LayoutList, LayoutGrid } from "lucide-react";

const ViewModeToggle = ({ mobileViewMode, setMobileViewMode }) => (
  <>
    <button
      onClick={() => setMobileViewMode("single")}
      className={`w-10 h-10 flex items-center justify-center transition ${
        mobileViewMode === "single" ? "bg-[#58618A]" : "hover:bg-[#05091B]"
      }`}
    >
      <LayoutList size={20} color="#CBD5E0" />
    </button>
    <button
      onClick={() => setMobileViewMode("double")}
      className={`w-10 h-10 flex items-center justify-center transition ${
        mobileViewMode === "double" ? "bg-[#58618A]" : "hover:bg-[#05091B]"
      }`}
    >
      <LayoutGrid size={20} color="#CBD5E0" />
    </button>
  </>
);

export default ViewModeToggle;
