import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getQuestionById, postSubmitAnswer } from "../../api/userApi";
import DetailQuestion from "./DetailQuestion";
import ModalResult from "./ModalResult";
const DetailQuiz = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [index, setIndex] = useState(0);

  const [quiz, setQuiz] = useState([]);
  const [answerQuiz, setAnswerQuiz] = useState([]);

  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);

  const [show, setShow] = useState(false);
  const [result, setResult] = useState({});

  useEffect(() => {
    setDisablePrev(index <= 0);
    setDisableNext(index >= quiz.length - 1);
  }, [index, quiz.length]);

  const handleReduceQuestion = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  const handleIncreaseQuestion = () => {
    if (index < quiz.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const fetchQuiz = async () => {
      const res = await getQuestionById(id);
      const groupBy = res.DT.reduce((acc, cur) => {
        const index = acc.findIndex((item) => item.id === cur.id);
        if (index === -1) {
          acc.push({
            id: cur.id,
            question: cur.description,
            image: cur.image,
            answers: [cur.answers],
          });
        } else {
          acc[index].answers.push(cur.answers);
        }
        return acc;
      }, []);
      setQuiz(groupBy);
    };
    fetchQuiz();
  }, []);
  const handleSubmit = async () => {
    const data = {
      quizId: +id,
      answers: answerQuiz,
    };
    const res = await postSubmitAnswer(data);
    if (res.EC === 0) {
      setResult(res.DT);
      setShow(true);
    } else alert(res.EM);
  };

  return (
    <>
      <div className="container-xxl d-flex ">
        <main style={{ border: "red solid", width: "70%" }}>
          <h2>
            <strong>Quiz {id}: </strong>
            {state?.title}
          </h2>

          {quiz && quiz.length !== 0 && (
            <DetailQuestion
              answerQuiz={answerQuiz}
              setAnswerQuiz={setAnswerQuiz}
              quiz={quiz[index]}
            />
          )}
          <nav className="d-flex justify-content-center align-items-center gap-2">
            <button
              className="btn btn-dark"
              disabled={disablePrev}
              onClick={handleReduceQuestion}
            >
              Previous
            </button>
            <button
              className="btn btn-dark"
              disabled={disableNext}
              onClick={handleIncreaseQuestion}
            >
              Next
            </button>
          </nav>
          <div className="d-flex justify-content-end">
            <button onClick={handleSubmit} className="btn btn-primary">
              Submit
            </button>
          </div>
        </main>
        <aside style={{ border: "green solid" }}>
          Bên này đếm ngược, bảng các câu hỏi
        </aside>
      </div>
      <ModalResult show={show} setShow={setShow} result={result} />
    </>
  );
};

export default DetailQuiz;
