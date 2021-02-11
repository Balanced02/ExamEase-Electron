import { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import SubjectCard from "../components/SubjectCard";
import TabBar from "../components/TabBar";

export default function ExamSelection() {
  const [currentIndex, onTabChanged] = useState(0);

  return (
    <div className="content exam-select">
      <div className="row">
        <div className="col m7">
          <TabBar
            tabs={["JAMB", "WAEC"]}
            currentIndex={currentIndex}
            onTabChanged={(i) => onTabChanged(i)}
          />
          <div>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
              nisi velit. Nulla eleifend blandit nibh, non aliquet purus
              scelerisque eleifend. Curabitur dictum, urna
            </p>
            <div className="row">
              <div className="col">
                <SubjectCard />
              </div>
              <div className="col">
                <SubjectCard />
              </div>
              <div className="col">
                <SubjectCard />
              </div>
              <div className="col">
                <SubjectCard />
              </div>
            </div>
          </div>
        </div>
        <div className="col m5">
          <Card >
            <h6>Standing instrucations</h6>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
              nisi velit. Nulla eleifend blandit nibh, non aliquet purus
              scelerisque eleifend. Curabitur dictum, urna
            </p>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
              nisi velit. Nulla eleifend blandit nibh, non aliquet purus
              scelerisque eleifend. Curabitur dictum, urna
            </p>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
              nisi velit. Nulla eleifend blandit nibh, non aliquet purus
              scelerisque eleifend. Curabitur dictum, urna
            </p>
            <div className="right">
              <Button>Let's get started</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
