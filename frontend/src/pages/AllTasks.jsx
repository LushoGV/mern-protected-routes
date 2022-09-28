import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTaskContext } from "../context/TasksContext";
import Task from "../components/Task";

const AllTasks = () => {
  const [data, setData] = useState(null);
  const { allTasks } = useTaskContext();
  const navigate = useNavigate();

  useEffect(() => {
    setData(null);
    setData(allTasks);
  }, [allTasks]);

  return (
    <>
      <header className="px-6 md:px-6 md:py-0 flex w-full justify-between items-center">
        <h1 className="text-2xl font-semibold md:p-0">
          {data!=null && (
            data.length === 1 ? `1 Task` : `${data.length} Tasks`
          )
            
          }
        </h1>
        <button
          onClick={() => navigate("/tasks/add")}
          className="font-semibold bg-green-600 p-3 rounded-lg w-28 hover:cursor-pointer hover:bg-green-700 disabled:bg-green-900"
        >
          Add task
        </button>
      </header>
      <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 w-full py-6 px-4 md:p-4">
        {data != null &&
          data.map((element, index) => {
            return (
              <li key={index} className="flex items-stretch justify-center">
                <Task
                  title={element.title}
                  description={element.description}
                  status={element.status}
                  id={element._id}
                />
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default AllTasks;
