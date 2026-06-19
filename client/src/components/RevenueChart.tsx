export default function RevenueChart() {
  const data = [
    { month: "Jan", revenue: 12000 },
    { month: "Feb", revenue: 18000 },
    { month: "Mar", revenue: 14000 },
    { month: "Apr", revenue: 22000 },
    { month: "May", revenue: 30000 },
  ];

  return (
    <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
      <h2 className="text-lg text-pink-400 font-bold mb-4">
        Revenue Overview
      </h2>

      <div className="space-y-2">
        {data.map((item) => (
          <div
            key={item.month}
            className="flex justify-between text-sm text-gray-300"
          >
            <span>{item.month}</span>
            <span className="text-green-400">${item.revenue}</span>
          </div>
        ))}
      </div>
    </div>
  );
}