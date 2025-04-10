import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="-mb-4 text-sm text-white bg-[#3D4466] hover:bg-[#4a4d78] px-4 py-1 rounded-lg transition"
    >
      ← Back
    </button>
  );
};

export default BackButton;
