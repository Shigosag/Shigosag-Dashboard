import Navbar from "../components/Navbar";
import Button from "../components/Button";

const data = [
  { title: "Revenue", value: "$82,400" },
  { title: "Users", value: "18,920" },
  { title: "Orders", value: "3,210" },
  { title: "Growth", value: "32%" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="p-10 text-center">
        <h1 className="text-4xl text-pink-500 font-bold">
          Shigosag Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          Powered by Shigosag
        </p>

        <div className="grid md:grid-cols-4 gap-4 mt-10">
          {data.map((item) => (
            <div
              key={item.title}
              className="bg-zinc-900 p-6 rounded-xl border border-zinc-800"
            >
              <p className="text-gray-400">{item.title}</p>
              <h2 className="text-2xl text-pink-400 font-bold">
                {item.value}
              </h2>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Button
            label="Go to Analytics"
            onClick={() => (window.location.href = "/analytics")}
          />
        </div>
      </div>
    </div>
  );
}