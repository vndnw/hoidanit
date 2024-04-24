import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getQuestionById } from "../../api/userApi";
import DetailQuestion from "./DetailQuestion";
const DetailQuiz = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState([]);
  const { state } = useLocation();
  const [index, setIndex] = useState(0);

  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);

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
            isSelected: false,
          });
        } else {
          acc[index].answers.push(cur.answers);
        }
        return acc;
      }, []);
      setQuiz(groupBy);
    };
    fetchQuiz();
  }, [id]);
  console.log(quiz);
  return (
    <div className="container-xxl d-flex ">
      <main style={{ border: "red solid", width: "70%" }}>
        <h2>
          <strong>Quiz {id}: </strong>
          {state?.title}
        </h2>

        {quiz && quiz.length !== 0 && <DetailQuestion quiz={quiz[index]} />}
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
      </main>
      <aside style={{ border: "green solid" }}>
        Bên này đếm ngược, bảng các câu hỏi
      </aside>
    </div>
  );
};

export default DetailQuiz;
