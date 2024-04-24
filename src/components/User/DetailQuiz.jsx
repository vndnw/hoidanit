import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestionById } from "../../api/userApi";

const DetailQuiz = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    const fetchQuiz = async () => {
      const res = await getQuestionById(id);
      console.log(res.DT);
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
  }, [id]);
  return (
    <div>
      {quiz.map((item) => (
        <div key={item.id}>
          <h1>{item.question}</h1>
          {item.image && (
            <img src={`data:image/png;base64, ${item.image}`} alt="img" />
          )}
          <ul>
            {item.answers.map((answer, index) => (
              <li key={index}>
                <input type="radio" name={answer} id="" />
                <span>{answer.description}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DetailQuiz;
