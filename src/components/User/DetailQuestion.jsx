import { useEffect, useState } from "react";

const DetailQuestion = ({ quiz, answerQuiz, setAnswerQuiz }) => {
  return (
    <div>
      <div>
        <div className="mt-5">
          <h3 className="text-center">
            <strong>Câu {quiz?.id}: </strong>
            {quiz.question}
          </h3>
        </div>
        {quiz.image && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{
                height: "50%",
                width: "50%",
                borderRadius: "10px",
              }}
              src={`data:image/png;base64, ${quiz.image}`}
              alt="img"
            />
          </div>
        )}
        <ul>
          {quiz.answers.map((answer, index) => {
            return (
              <li key={index}>
                <input
                  type="checkbox"
                  id={answer.id}
                  checked={
                    // Check if the current answer is in the answerQuiz state for the current question
                    answerQuiz.some(
                      (obj) =>
                        obj.questionId === quiz.id &&
                        obj.userAnswerId.includes(answer.id)
                    )
                  }
                  onChange={(e) => {
                    setAnswerQuiz((prevAnswers) => {
                      // Find the index of the object for the current question
                      const questionIndex = prevAnswers.findIndex(
                        (obj) => obj.questionId === quiz.id
                      );

                      if (questionIndex !== -1) {
                        // If the object exists, create a new object with the new answer added to the existing userAnswerId array
                        const newQuestionObject = {
                          ...prevAnswers[questionIndex],
                          userAnswerId: e.target.checked
                            ? [
                                ...prevAnswers[questionIndex].userAnswerId,
                                answer.id,
                              ]
                            : prevAnswers[questionIndex].userAnswerId.filter(
                                (id) => id !== answer.id
                              ),
                        };

                        // Replace the old object with the new one
                        return [
                          ...prevAnswers.slice(0, questionIndex),
                          newQuestionObject,
                          ...prevAnswers.slice(questionIndex + 1),
                        ];
                      } else if (e.target.checked) {
                        // If the object doesn't exist and the checkbox is checked, create a new one
                        const newAnswer = {
                          questionId: quiz.id,
                          userAnswerId: [answer.id],
                        };
                        return [...prevAnswers, newAnswer];
                      } else {
                        // If the checkbox is not checked, return the previous state
                        return prevAnswers;
                      }
                    });
                  }}
                />
                <span className="ms-1">{answer.description}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DetailQuestion;
