interface BtnProps {
  text: string;
  onClick: () => void;
}

function PrimaryButton({ text, onClick }: BtnProps) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-200 hover:bg-blue-300 rounded shadow px-4 py-2 duration-150"
    >
      {text}
    </button>
  );
}

export default PrimaryButton;
