import { useContext } from "react";
import AppContext from "../AppContext";
import subjectList from "../utils/subjectList";

export default function SubjectCard({
  selectedSubject,
  onSelectSubject,
  disabled,
  selectedExam,
}) {
  const state = useContext(AppContext)
  let newSubjects = subjectList.filter(sub => state[`${selectedExam}-${sub.value}`])
  return (
    <div className="subject-card">
      <div className="content">
        <div className="image-container">
          <span>{selectedSubject?.name ? "📖" : "?"}</span>
        </div>
        <div className="subject">
          {selectedSubject?.name ? (
            <strong>{selectedSubject.name}</strong>
          ) : (
            <span>
              <strong>Click</strong> to add a subject
            </span>
          )}
        </div>
      </div>
      <div className="subject-dropdown">
        {newSubjects.map((sub) => (
          <button
            key={sub.value}
            onClick={() => onSelectSubject(sub)}
            disabled={disabled.indexOf(sub.value) !== -1}
          >
            {sub.name}
          </button>
        ))}
      </div>
    </div>
  );
}
