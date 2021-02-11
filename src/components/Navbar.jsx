import { useHistory } from "react-router-dom";

import BackArrowSvg from "../assets/svgs/BackArrowSvg";
import Logo from "./Logo";

export default function Navbar({ title }) {
  const history = useHistory();

  const goBack = () => history.goBack();
  return (
    <div className="navbar">
      <button className="back-button" onClick={goBack}>
        <BackArrowSvg />
      </button>
      <div className="title" >
        <h5>{title}</h5>
      </div>
      <Logo />
    </div>
  );
}
