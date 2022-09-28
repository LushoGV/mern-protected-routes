import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTaskContext } from "../context/TasksContext";

const Task = ({ title, description, status, id }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { deleteTask, changeStatus } = useTaskContext();
  const navigate = useNavigate();

  return (
    <div className="w-full border-2 border-gray-800 rounded-lg m-1 shadow-2xl">
      <header className="relative px-3 py-2 flex justify-between items-center border-b-2 border-gray-800">
        <h1 className="overflow-hidden text-ellipsis">{title}</h1>
        <button
          onClick={() => setOpenMenu(true)}
          className="text-2xl border-2 border-gray-800 w-8 h-8 pb-4 flex items-center justify-center rounded-full hover:bg-gray-700"
        >
          ...
        </button>
        {openMenu && (
          <div className="absolute top-0 right-0 py-2 px-1 bg-slate-900 border-2 border-gray-800 rounded-lg shadow-xl flex items-end flex-row-reverse">
            <button
              onClick={() => setOpenMenu(false)}
              className="text-lg border-2 border-gray-800 w-8 h-8 pb-1 flex items-center justify-center rounded-full mx-2 hover:bg-gray-700"
            >
              <span className="material-symbols-outlined text-xl pt-1">
                close
              </span>
            </button>
            <button
              className="text-lg border-2 border-gray-800 w-8 h-8 pb-1 flex items-center justify-center rounded-full mx-1 hover:bg-gray-700"
              onClick={() => navigate(`/tasks/edit/${id}`)}
            >
              <span className="material-symbols-outlined text-xl pt-1">
                edit
              </span>
            </button>
            <button
              className="text-lg border-2 border-gray-800 w-8 h-8 pb-1 flex items-center justify-center rounded-full mx-2 bg-red-500 hover:bg-red-700"
              onClick={() => {
                deleteTask(id), setOpenMenu(false);
              }}
            >
              <span className="material-symbols-outlined text-xl pt-1">
                delete
              </span>
            </button>
          </div>
        )}
      </header>
      <section className="p-4 pb-3">
        <p className="mb-4 text-sm text-gray-400 max-w-[300px] md:max-h-[100px] md:min-h-[100px] overflow-hidden text-ellipsis">
          {description}
        </p>
        <button
          onClick={() => changeStatus(id, { title, description, status })}
          className={
            status
              ? "text-green-600 hover:cursor-pointer"
              : "text-red-400 hover: cursor-pointer"
          }
        >
          {status ? "completed" : "incomplete"}
        </button>
      </section>
    </div>
  );
};

export default Task;
