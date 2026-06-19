import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-black text-white p-4 flex justify-between border-b border-gray-800">
      <div className="text-pink-500 font-bold">
        🚀 Shigosag Dashboard
      </div>

      <div className="space-x-4">
        <button onClick={() => navigate("/home")} className="hover:text-pink-400">
          Home
        </button>

        <button onClick={() => navigate("/analytics")} className="hover:text-pink-400">
          Analytics
        </button>

        <button onClick={() => navigate("/admin")} className="hover:text-pink-400">
          Admin
        </button>
      </div>
    </nav>
  );
}