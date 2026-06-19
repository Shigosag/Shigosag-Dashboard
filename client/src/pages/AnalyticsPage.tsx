import Navbar from "../components/Navbar";
import Button from "../components/Button";

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="p-10">
        <h1 className="text-3xl text-pink-400 font-bold">
          Analytics
        </h1>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-zinc-900 p-4 rounded-xl">
            Revenue: $82,400
          </div>

          <div className="bg-zinc-900 p-4 rounded-xl">
            Users: 18,920
          </div>

          <div className="bg-zinc-900 p-4 rounded-xl">
            Orders: 3,210
          </div>
        </div>

        <div className="mt-6">
          <Button
            label="Go to Admin Panel"
            onClick={() => (window.location.href = "/admin")}
          />
        </div>
      </div>
    </div>
  );
}