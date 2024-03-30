import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(["eat", "code", "sleep"]); // [1, 2, 3
  const [value, setValue] = useState("");
  const haha = Math.floor(new Date().valueOf() + Math.random());
  console.log(`${haha}`);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      alert("Please enter a value");
      return;
    }
    setTodos([...todos, value]);
    setValue("");
    alert("Form submitted");
  };
  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };
  return (
    <>
      <h1 className=" text-3xl font-bold underline">To Do App</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="id">Add to do:</label>
        <input
          value={value}
          onChange={(e) => {
            if (!e.target.value.startsWith(" ")) {
              setValue(e.target.value);
            }
          }}
          id="user"
          type="text"
          name=""
          placeholder="Enter to do"
        />
        <button
          onClick={handleSubmit}
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Add
        </button>
      </form>
      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="flex justify-between">
              <span>{todo}</span>
              <button
                onClick={() => handleDelete(index)}
                className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
