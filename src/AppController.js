import React, { useEffect } from "react";

const getLocalState = () => {
  return localStorage.getItem("@examEaseWeb");
};

export let initialState = {
  examType: null,
  subjectList: null,
};

const useController = () => {
  const persistState = (newState) => {
    localStorage.setItem("@examEaseWeb", JSON.stringify(newState));
  };

  const [state, dispatch] = React.useReducer((state, value) => {
    let newState = {
      ...state,
      ...value,
    };
    persistState(newState);
    return newState;
  }, initialState);

  useEffect(() => {
    let data = getLocalState();
    if (data) {
      dispatch({ ...JSON.parse(data), alert: null });
    }
  }, []);

  return { state, dispatch };
};

export default useController;
