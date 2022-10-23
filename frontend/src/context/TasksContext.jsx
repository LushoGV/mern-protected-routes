import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [allTasks, setAllTasks] = useState(null);
  const {config} = useAuthContext()
  const api = import.meta.env.VITE_BACKEND_URL

  const getData = async () => {
    setAllTasks(null);
    try {
      const res = await axios.get(`${api}/getTasks`, config);
      const newData = await res.data;
      setAllTasks(newData);
    } catch (error) {
      console.log(error);
    }
  };

  const loadData = async (id) => {
    const res = await axios.get(`${api}/getTask/${id}`, config);
    return res.data;
  };

  const updateTask = async (id, task) => {
    await axios.put(`${api}/edit/${id}`, task, config);
    getData();
  };

  const createTask = async (newTask) => {
    await axios.post(`${api}/addTask`, newTask, config);
    getData();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${api}/delete/${id}`, config);
    getData();
  };

  const changeStatus = async (id, task) => {
    task.status = !task.status;
    await axios.put(`${api}//edit/${id}`, task, config);
    getData();
  };

  useEffect(() => {
    setAllTasks(null);
    getData();
  }, []);

  return (
    <TasksContext.Provider
      value={{
        allTasks,
        setAllTasks,
        loadData,
        updateTask,
        changeStatus,
        createTask,
        deleteTask,
        getData,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTaskContext = () => {
  const {
    allTasks,
    setAllTasks,
    loadData,
    updateTask,
    changeStatus,
    createTask,
    deleteTask,
    getData,
  } = useContext(TasksContext);
  return {
    allTasks,
    setAllTasks,
    loadData,
    updateTask,
    changeStatus,
    createTask,
    deleteTask,
    getData,
  };
};
