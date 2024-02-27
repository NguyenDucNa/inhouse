import { useNavigate } from "react-router-dom";

export default function Back() {
  const navigate = useNavigate();

  return (
    <button className="text-gray-500" onClick={() => { navigate(".."); }}>
      Back
    </button>
  );
}
