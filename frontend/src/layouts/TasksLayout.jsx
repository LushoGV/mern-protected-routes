import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useTaskContext } from "../context/TasksContext";

const TasksLayout = () => {
  const { isAuth } = useAuthContext();
  const { getData } = useTaskContext();

  useEffect(() => {
    isAuth && getData();
  }, []);

  return (
    <section className="w-full flex flex-col items-center justify-center md:pt-4 md:p-2 max-w-6xl relative">
      {isAuth ? <Outlet /> : <Navigate to="/" />}
    </section>
  );
};

export default TasksLayout;
