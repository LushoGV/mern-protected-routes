import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTaskContext } from "../context/TasksContext";

const AddTask = () => {
  const [formInfo, setFormInfo] = useState({
    title: "",
    description: "",
  });
  const { createTask } = useTaskContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formInfo.title != "" && formInfo.description != "") {
      createTask(formInfo);
      navigate("/tasks");
    }
  };

  const handleInputContent = (e) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="md:shadow-xl flex flex-col md:border-2 border-gray-800 rounded-lg w-full md:w-96"
    >
      <header>
        <h2 className="w-full text-xl md:text-lg font-semibold md:border-b-2 border-gray-800 p-6 py-3">
          Create Task
        </h2>
      </header>
      <section className="p-6 py-3 mt-3 md:m-0 flex flex-col items-center">
        <div className="flex flex-col m-2 w-full">
          <span>Title</span>
          <input
            type="text"
            placeholder="title"
            name="title"
            onChange={handleInputContent}
            className="py-2 px-3 my-2 rounded-lg border-2 border-gray-800 bg-slate-900 outline-none placeholder:text-gray-600"
          />
        </div>
        <div className="flex flex-col m-2 w-full">
          <span>Description</span>
          <textarea
            type="text"
            rows="4"
            placeholder="description"
            name="description"
            onChange={handleInputContent}
            className="py-2 px-3 my-2 rounded-lg border-2 border-gray-800 bg-slate-900 outline-none placeholder:text-gray-600"
          />
        </div>
        <div className="mt-3 md:m-0">
          <button
            onClick={() => navigate("/tasks")}
            className="font-semibold bg-red-600 p-3 mt-6 mb-4 rounded-lg w-32 hover:cursor-pointer hover:bg-red-700 disabled:bg-green-900 mr-3"
          >
            Cancel
          </button>
          <input
            type="submit"
            value="add Task"
            className="font-semibold bg-green-600 p-3 mt-6 mb-4 rounded-lg w-32 hover:cursor-pointer hover:bg-green-700 disabled:bg-green-900"
          />
        </div>
      </section>
    </form>
  );
};

export default AddTask;
