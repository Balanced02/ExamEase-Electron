import { useState } from "react";
import TimeSvg from "../assets/svgs/TimeSvg";
import Button from "../components/Button";
import Card from "../components/Card";
import SubjectCard from "../components/SubjectCard";
import TabBar from "../components/TabBar";
import examTypes from "../utils/examTypes";

const instructions = {
  WAEC: [
    {
      title: "Always answer easy questions first",
      body: [
        "Obviously, there is a time limit in every examination. In the case of WAEC, it is usually 2hour, 30minutes. Now, if you do not manage your time properly, you might end up not answering even the questions you know. So! Whenever you meet a question that is not familiar, just skip it to the next question. It will help you a lot.",
      ],
    },
    {
      title: "Read questions carefully",
      body: [
        "You might think that your reading skill is perfect but it is not, especially in times when you are in tension. Reading carefully is another tentative secret to answer WAEC questions correctly. This is so because, sometimes, you can make little mistakes that can cause you to totally fail your exams. I am saying this because I had the same problem during my WAEC examination",
      ],
    },
    {
      title: "Use a Jotter",
      body: [
        "You need a jotter to make a note and put down your thoughts. Noting down areas of difficulties and finding someone capable to help you shows your seriousness.",
      ],
    },
  ],
};

export default function ExamSelection() {
  const [currentIndex, onTabChanged] = useState(0);
  const [subjects, setSubjects] = useState([]);

  const handleSelectedSubject = (sub, i) => {
    let newSubjects = [...subjects];
    newSubjects[i] = sub;
    setSubjects(newSubjects);
  };

  return (
    <div className="content exam-select">
      <div className="row">
        <div className="col m7">
          <TabBar
            tabs={examTypes.map((exam) => exam.name)}
            currentIndex={currentIndex}
            onTabChanged={(i) => {
              onTabChanged(i)
              setSubjects([])
            }}
          />
          <div>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
              nisi velit. Nulla eleifend blandit nibh, non aliquet purus
              scelerisque eleifend. Curabitur dictum, urna
            </p>
            <div className="row">
              {Array.apply(null, Array(4)).map((_, index) => (
                <div className="col" key={index}>
                  <SubjectCard
                    selectedSubject={subjects[index]}
                    onSelectSubject={(subject) =>
                      handleSelectedSubject(subject, index)
                    }
                    disabled={subjects.map((sub) => sub?.value)}
                    selectedExam={examTypes[currentIndex].value}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col m5">
          <Card className="instructions">
            <div className="timer">
              <p>2hrs 30mins</p>
              <TimeSvg />
            </div>
            <h6>Standing instrucations</h6>
            {instructions.WAEC.map((int, i) => (
              <div key={i}>
                <p>
                  <strong>{i + 1}.</strong> {int.title}
                </p>
                {int.body.map((bod, k) => (
                  <p className="description" key={`${i}-${k}`}>
                    {bod}
                  </p>
                ))}
              </div>
            ))}
            <div className="right">
              <Button>Let's get started</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
