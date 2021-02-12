import { useContext } from "react";
import { useApiCall } from "../api/useApiCall";
import AppContext from "../AppContext";
import examTypes from "./examTypes";
import subjectList from "./subjectList";

const useFetchAllQuestions = () => {
  const { callApi } = useApiCall();
  const { dispatch } = useContext(AppContext);
  const fetchAllQuestions = async () => {
    for (let i = 0; i < examTypes.length; i++) {
      for (let j = 0; j < subjectList.length; j++) {
        let key = `${examTypes[i].value}-${subjectList[j].value}`;
        callApi(`subject=${subjectList[j].value}&type=${examTypes[i].value}`)
          .then((data) => {
            if (data?.data?.length) {
              dispatch({
                [key]: data,
              });
            }
          })
      }
    }
  };
  return { fetchAllQuestions };
};

export default useFetchAllQuestions;
