import { useHistory } from "react-router-dom";

import Card from "../components/OnCard";
import Saly from "../assets/images/saly.png";
import Saly2 from "../assets/images/saly_2.png";
import Saly3 from "../assets/images/saly_3.png";
import Button from "../components/Button";
import useFetchAllQuestions from "../utils/useFetchAllQuestions";
import { useEffect } from "react";

export default function Onboarding() {
  const history = useHistory()
  const { fetchAllQuestions } = useFetchAllQuestions()

  const getStarted = () => {
    history.push('/app/selection')
  }

  useEffect(() => [
    fetchAllQuestions()
  ], [])

  return (
    <div className="onboarding">
      <div className="container">
        <div className="row">
          <Card className="col m4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
              nisi velit. Lorem ipsum dolor sit amet,
            </p>
            <div className="bottom-img img-container">
              <img src={Saly} alt="boy reading" srcset="" />
            </div>
          </Card>
          <Card className="col m4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
              nisi velit.
            </p>
            <div className="bottom-img img-container">
              <img src={Saly2} className="outside" alt="boy reading" srcset="" />
            </div>
          </Card>
          <Card className="col m4">
            <div className="bottom-img img-container">
              <img src={Saly3} alt="boy reading" srcset="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
              nisi velit.
            </p>
          </Card>
        </div>

        <div className="welcome center">
          <p className="heading">
            Welcome to <strong>ExamEase</strong>
          </p>
          <div className="container">
            <p className="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
              nisi velit.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Fusce nec nisi velit.
            </p>
          </div>
          <Button onClick={getStarted} >
          Let's get started
          </Button>
        </div>
      </div>
    </div>
  );
}
