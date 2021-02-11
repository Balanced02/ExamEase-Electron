export default function TabBar({ tabs, currentIndex, onTabChanged }) {
  return (
    <div className="tabbar">
      {tabs.map((tab, i) => (
        <span key={i}>
          <input
            type="checkbox"
            name="slideItem"
            className="slide-toggle"
            id={`slide-item-${i}`}
            checked={currentIndex === i}
            onChange={() => onTabChanged(i)}
          />
          <label htmlFor={`slide-item-${i}`}>
            <span>{tab}</span>
          </label>
        </span>
      ))}
      <div className="clear"></div>
      <div className="slider">
        <div
          className="bar"
          style={{ marginLeft: `${(currentIndex / 4) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
