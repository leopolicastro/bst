import "./_buttons.scss";

function Button({ onClick, text, color }) {
  return (
    <button className={`btn-${color}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
