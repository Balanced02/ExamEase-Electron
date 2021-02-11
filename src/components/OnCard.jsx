export default function OnCard({ children, className }) {
  return (
    <div className={`oncard ${className}`}>
      <div className="content">{children}</div>
    </div>
  );
}
