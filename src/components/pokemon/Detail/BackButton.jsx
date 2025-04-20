import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="text-sm px-4 py-1 rounded-lg transition 
                  bg-[#c5cee0] text-[#2e3a59] hover:bg-[#e4e9f2] 
                  dark:bg-[#3D4466] dark:hover:bg-[#4a4d78] 
                  dark:text-white"
    >
      ← Back
    </button>
  );
};

export default BackButton;
