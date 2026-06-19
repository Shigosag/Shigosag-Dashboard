import Navbar from "../components/Navbar";
import RevenueChart from "../components/RevenueChart";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="p-10">
        <h1 className="text-3xl font-bold text-red-500">
          Admin Panel
        </h1>

        {/* GRID SECTIONS */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
            User Management
          </div>

          <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
            System Settings
          </div>

          <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
            Logs & Monitoring
          </div>
        </div>

        {/* REVENUE CHART */}
        <div className="mt-10">
          <RevenueChart />
        </div>

        {/* BACK BUTTON */}
        <div className="mt-8">
          <button
            onClick={() => (window.location.href = "/home")}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl"
          >
            Back Home
          </button>
        </div>
      </div>
    </div>
  );
}