import { useContext, useEffect, useMemo, useState } from "react";
import AppContext from "../AppContext";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";
import Card from "../components/Card";

let timeout;

export default function TakeExam() {
  const { examType, subjectList } = useContext(AppContext);
  const [currentSubject, setCurrentSubject] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [resultView, setResultView] = useState(false);
  const [userScore, setUserScore] = useState({});

  const contextState = useContext(AppContext);

  const questions = useMemo(() => {
    let key = `${examType.value}-${subjectList[currentSubject].value}`;
    return contextState[key]?.data ?? [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSubject]);

  const currentQuestion = useMemo(() => {
    return questions[questionIndex];
  }, [questionIndex, questions]);

  const handleAnswerClick = (ansKey, questionKey) => {
    setUserAnswers((pervAnswers) => ({
      ...pervAnswers,
      [subjectList[currentSubject].value]: {
        ...pervAnswers[subjectList[currentSubject].value],
        [questionKey]: ansKey,
      },
    }));
    timeout = setTimeout(() => {
      goToNextQuestion();
    }, 200);
  };

  useEffect(() => {
    return () => clearTimeout(timeout);
  }, []);

  const goToNextQuestion = () => {
    if (questionIndex < questions?.length - 1) {
      setQuestionIndex(questionIndex + 1);
    }
  };
  const renderQuestionNavigator = () => {
    let questionsIndexBox = [];
    for (let i = 0; i < questions.length; i++) {
      questionsIndexBox.push(
        <p
          key={`${userAnswers[subjectList[currentSubject].value]}- ${i}`}
          onClick={() => setQuestionIndex(i)}
          className={`col question-index ${
            userAnswers[subjectList[currentSubject].value]?.[questions?.[i]?.id]
              ? "selected"
              : ""
          }`}
        >
          {i + 1}
        </p>
      );
    }
    return questionsIndexBox;
  };

  const submitExam = () => {
    let userScores = {};
    for (let i = 0; i < subjectList.length; i++) {
      userScores[subjectList[i].value] = 0;
      let key = `${examType.value}-${subjectList[i].value}`;
      let questions = contextState[key]?.data ?? [];
      let subjectAnswers = userAnswers[subjectList[i].value];
      if (subjectAnswers) {
        questions.forEach((question) => {
          if (subjectAnswers?.[question.id] === question.answer) {
            userScores[subjectList[i].value] += 1;
          }
        });
      }
    }
    console.log("userScores", userScores);
    setUserScore(userScores);
    setResultView(true);
  };

  return (
    <div className="take-exam">
      <Navbar
        title={resultView ? "Result" : null}
        subjectList={resultView ? null : subjectList}
        currentSubject={currentSubject}
        setCurrentSubject={setCurrentSubject}
      />
      {resultView ? (
        <div className="result row">
          {subjectList?.map((subject) => (
            <div className="col m6 l3" key={subject.value}>
              <Card>
                <div className="row">
                  <div className="col m6">
                    <h6 className="title">{subject.name}:</h6>
                    <div className="progres-bar-container">
                      <ProgressBar
                        value={((userScore?.[subject.value] ?? 0) / 40) * 100}
                      />
                    </div>
                  </div>
                  <div className="col m6 right-panel">
                    <div className="items">
                      <h5>
                        {
                          Object.keys(userAnswers?.[subject?.value] ?? {})
                            ?.length
                        }
                      </h5>
                      <p>Questions Attempted</p>
                    </div>
                    <div className="items">
                      <h5>{userScore?.[subject.value]}</h5>
                      <p>Right Answers</p>
                    </div>
                    <div className="items last">
                      <h5>
                        {40 -
                          Object.keys(userAnswers?.[subject?.value] ?? {})
                            ?.length}
                      </h5>
                      <p>Not attempted</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      ) : (
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
                          checked={
                            userAnswers[subjectList[currentSubject].value]?.[
                              currentQuestion.id
                            ] === key
                          }
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
          <div className="col m4">
            <div className="title">
              <h6>Go to Question</h6>
              <div className="row">{renderQuestionNavigator()}</div>
              <Button className="danger" onClick={submitExam}>
                Submit Exam
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
