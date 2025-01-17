interface ButtonProps {
  type?: "button" | "submit" | "reset";
  text: string;
  onClick: () => void;
}

function Button({ type = "button", text, onClick }: ButtonProps) {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
