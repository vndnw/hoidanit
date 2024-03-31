import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { twMerge } from "tailwind-merge";

function App() {
  const [todos, setTodos] = useState(["eat", "code", "sleep"]); // [1, 2, 3
  const [value, setValue] = useState("");
  const notify = (message, type) => toast[type](message);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      notify("Nhập giá trị", "error");
      return;
    }
    setTodos([...todos, value]);
    setValue("");
    notify("Thêm thành công", "success");
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
    notify("Xóa thành công", "success");
  };
  return (
    <>
      <ToastContainer stacked />
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
            <li
              key={index}
              className={twMerge(
                "flex justify-between",
                index % 2 === 0 && "bg-gray-300",
              )}
            >
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
