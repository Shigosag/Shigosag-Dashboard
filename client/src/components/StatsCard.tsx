type StatsCardProps = {
  title: string;
  value: string | number;
  color?: "pink" | "red" | "green" | "blue" | "yellow";
};

const colorMap = {
  pink: "text-pink-400",
  red: "text-red-400",
  green: "text-green-400",
  blue: "text-blue-400",
  yellow: "text-yellow-400",
};

export default function StatsCard({
  title,
  value,
  color = "pink",
}: StatsCardProps) {
  return (
    <div className="bg-zinc-900 p-5 rounded-xl border border-zinc-800 hover:border-pink-500/40 transition">
      <p className="text-zinc-400 text-sm">{title}</p>

      <h2 className={`text-2xl font-bold mt-2 ${colorMap[color]}`}>
        {value}
      </h2>
    </div>
  );
}