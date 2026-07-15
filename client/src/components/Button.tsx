interface ButtonProps {
  label: string;
  onClick: () => void;
  color?: string;
}

export default function Button({ label, onClick, color = "pink" }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-${color}-600 hover:bg-${color}-700 px-4 py-2 rounded-xl text-white transition`}
    >
      {label}
    </button>
  );
}
