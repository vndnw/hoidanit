const DetailQuestion = ({ quiz }) => {
  console.log(quiz);
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
          {quiz.answers.map((answer, index) => (
            <li key={index}>
              <input type="radio" name={answer} id="" />
              <span>{answer.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailQuestion;
