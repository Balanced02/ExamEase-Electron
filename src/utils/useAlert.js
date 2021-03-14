import { useContext } from "react";
import AppContext from "../AppContext";

export default function useAlert() {
  const { dispatch } = useContext(AppContext);

  const showAlert = (type, message) => {
    dispatch({ alert: { type, message } });
  };

  const hideAlert = () => {
    dispatch({ alert: null });
  };

  return { showAlert, hideAlert };
}
