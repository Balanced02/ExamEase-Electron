export default function Button({ children, onClick, className }) {
  return (
    <button
      className={`button waves-effect waves-light ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
