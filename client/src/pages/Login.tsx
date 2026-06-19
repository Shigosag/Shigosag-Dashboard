import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // check empty input
    if (!email.trim() || !password.trim()) {
      setError("Please enter username and password");
      return;
    }

    // proceed if anything is typed
    setError("");
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-zinc-900 p-10 rounded-2xl w-96 border border-zinc-800">

        <h2 className="text-2xl text-pink-500 font-bold mb-6 text-center">
          Shigosag Login
        </h2>

        <input
          placeholder="Username / Email"
          className="w-full mb-3 p-2 rounded bg-black border border-zinc-700 focus:border-pink-500 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          className="w-full mb-2 p-2 rounded bg-black border border-zinc-700 focus:border-pink-500 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-red-400 text-sm mb-2">
            {error}
          </p>
        )}

        <button
          onClick={handleLogin}
          className="w-full bg-pink-600 hover:bg-pink-700 p-2 rounded transition"
        >
          Login
        </button>

        <p className="text-xs text-gray-500 mt-4 text-center">
          Demo mode — type anything to continue
        </p>
      </div>
    </div>
  );
}