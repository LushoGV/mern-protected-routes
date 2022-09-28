import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import Alert from "../components/Alert";

const AuthLayout = () => {
  const { isAuth, error } = useAuthContext();

  return (
    <section className="w-full flex flex-col items-center md:pt-6 md:p-2">
      {error && <Alert msg={error} />}
      {!isAuth ? <Outlet /> : <Navigate to="/tasks" />}
    </section>
  );
};

export default AuthLayout;