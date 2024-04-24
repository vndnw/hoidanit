import Card from "react-bootstrap/Card";
import { getQuizByUser } from "../../api/userApi";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function ListQuiz() {
  const [quizList, setQuizList] = useState([]);
  useEffect(() => {
    const quiz = async () => {
      const res = await getQuizByUser();
      console.log(res);
      if (res.EC === 0) setQuizList(res.DT);
    };
    quiz();
  }, []);
  return (
    <>
      <Row>
        {quizList &&
          quizList.map((quiz) => (
            <Col md={4} key={`quiz-${quiz.id}`}>
              <Card className="mx-auto" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={`data:image/png;base64, ${quiz.image}`}
                />
                <Card.Body>
                  <Card.Title>Quiz {quiz.id}</Card.Title>
                  <Card.Text>{quiz.description}</Card.Text>
                  <Link
                    className="btn btn-primary"
                    to={`/quiz/${quiz.id}`}
                    state={{ title: quiz?.description }}
                  >
                    Start now
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </>
  );
}

export default ListQuiz;
