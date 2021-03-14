import ErrorIcon from "../assets/images/warning.png";
import useAlert from "../utils/useAlert";

export default function Alert({ message }) {
  const { hideAlert } = useAlert();
  return (
    <div className="alert">
      <div className="overlay"></div>
      <div className="alert-content">
        <img src={ErrorIcon} alt="Error" />
        <p className="message">{message}</p>
        <button
          className="btn waves-effect waves-light cancel"
          onClick={hideAlert}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
