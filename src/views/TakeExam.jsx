import { useContext, useEffect, useMemo, useState } from "react";
import AppContext from "../AppContext";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

export default function TakeExam() {
  const [currentSubject, setCurrentSubject] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});

  const { examType, subjectList } = useContext(AppContext);
  const contextState = useContext(AppContext);

  const questions = useMemo(() => {
    let key = `${examType.value}-${subjectList[currentSubject].value}`;
    console.log(contextState[key]?.data);
    return contextState[key]?.data ?? [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSubject]);

  const currentQuestion = useMemo(() => {
    return questions[questionIndex];
  }, [questionIndex, questions]);

  const handleAnswerClick = (ansKey, questionKey) => {
    setUserAnswers((pervAnswers) => ({
      ...pervAnswers,
      [questionKey]: ansKey,
    }));
    goToNextQuestion();
  };

  const goToNextQuestion = () => {
    if (questionIndex < questions?.length - 1) {
      setQuestionIndex(questionIndex + 1);
    }
  };

  return (
    <div className="take-exam">
      <Navbar title={`${subjectList[currentSubject]?.name}`} />
      <div className="row">
        <div className="col m8">
          <div className="content">
            <div className="question-card">
              {currentQuestion.section && (
                <div className="section">
                  <p className="bold">Section: </p>
                  <div
                    className="section-content"
                    dangerouslySetInnerHTML={{
                      __html: currentQuestion?.section,
                    }}
                  />
                </div>
              )}
              {currentQuestion.image && (
                <img
                  src={currentQuestion.image}
                  alt={currentQuestion.question}
                />
              )}

              <div className="question">
                <p className="bold">Question {questionIndex + 1}:</p>
                {currentQuestion?.question}
              </div>
              <div className="answers">
                {Object.keys(currentQuestion?.option ?? {}).map((key) => (
                  <div
                    className="row answer-row"
                    key={key}
                    onClick={() => handleAnswerClick(key, currentQuestion.id)}
                  >
                    <span className="key">{key}</span>{" "}
                    <label>
                      <input
                        name="answer"
                        type="radio"
                        checked={userAnswers[currentQuestion.id] === key}
                        onChange={() =>
                          handleAnswerClick(key, currentQuestion.id)
                        }
                      />
                      <span className="answer-text">
                        {currentQuestion?.option[key]}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
              <div className="button-row">
                <Button
                  className="disabled"
                  onClick={() =>
                    questionIndex > 0
                      ? setQuestionIndex(questionIndex - 1)
                      : null
                  }
                >
                  {" "}
                  Previous{" "}
                </Button>
                <Button onClick={goToNextQuestion}> Next </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
