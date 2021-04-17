import { useContext } from "react";
import { useHistory } from "react-router-dom";
import AppContext from "../AppContext";

import BackArrowSvg from "../assets/svgs/BackArrowSvg";
import Logo from "./Logo";

export default function Navbar({
  title,
  subjectList,
  currentSubject,
  setCurrentSubject,
}) {
  const history = useHistory();
  const { fullName } = useContext(AppContext);

  const goBack = () => history.goBack();
  return (
    <div className="navbar">
      <button className="back-button" onClick={goBack}>
        <BackArrowSvg />
      </button>
      <div className="title">
        <h6>{title}</h6>
        {subjectList?.map((sub, i) => (
          <h6
            className={currentSubject === i ? "current" : ""}
            onClick={() => setCurrentSubject(i)}
          >
            {sub.name}
          </h6>
        ))}
      </div>
      <span className="studentName">{fullName}</span>
      <Logo />
    </div>
  );
}
