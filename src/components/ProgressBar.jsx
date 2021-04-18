import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ProgressBar({ value }) {
  return (
    <div className="progress-bar">
      <CircularProgressbar
        value={value ? value : 0}
        text={`${value ? value : 0}%`}
      />
    </div>
  );
}
