import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import TasksLayout from "./layouts/TasksLayout";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AllTasks from "./pages/AllTasks";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";
import { AuthProvider } from "./context/AuthContext";
import { TasksProvider } from "./context/TasksContext";

function App() {
  return (
    <div className="relative w-full bg-slate-900 min-h-screen text-white flex flex-col items-center">
      <BrowserRouter>
        <AuthProvider>
          <TasksProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<AuthLayout />}>
                <Route index element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>
              <Route path="/tasks" element={<TasksLayout />}>
                <Route index element={<AllTasks />} />
                <Route path="/tasks/add" element={<AddTask />} />
                <Route path="/tasks/edit/:id" element={<EditTask />} />
              </Route>
              <Route path="*" element={<Navigate to="/tasks" />} />
            </Routes>
          </TasksProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
