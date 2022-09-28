import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { sendInfo, setError } = useAuthContext();
  const [formInfo, setFormInfo] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formInfo.email == "" || formInfo.password == "") {
      setError("All fields must be completed");
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formInfo.email)
    ) {
      setError("Invalid email");
    } else {
      sendInfo(formInfo, 1);
    }
  };

  const handleInputContent = (e) => {
    setError(false);
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setError(false);
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="md:shadow-xl flex flex-col md:border-2 border-gray-800 rounded-lg w-full md:w-96"
    >
      <header>
        <h2 className="w-full text-xl md:text-lg font-semibold md:border-b-2 border-gray-800 p-6 py-3 md:mb-4">
          Login
        </h2>
      </header>
      <section className="p-6 py-3 flex flex-col items-center">
        <div className="flex flex-col m-2 w-full">
          <span>Email</span>
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={handleInputContent}
            className="py-2 px-3 my-2 rounded-lg border-2 border-gray-800 bg-slate-900 outline-none placeholder:text-gray-600"
          />
        </div>
        <div className="flex flex-col m-2 w-full">
          <span>Password</span>
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleInputContent}
            className="py-2 px-3 my-2 rounded-lg border-2 border-gray-800 bg-slate-900 outline-none placeholder:text-gray-600"
          />
        </div>
        <input
          type="submit"
          value="Log in"
          className="font-semibold bg-green-600 p-3 mt-6 mb-4 rounded-lg w-32 hover:cursor-pointer hover:bg-green-700 disabled:bg-green-900"
        />
        <p className="flex w-full justify-center my-2">
          <span className="text-xs mr-1 text-gray-500">
            Don´t have an account?
          </span>
          <span
            className="text-xs font-semibold hover:cursor-pointer hover:text-gray-400"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </span>
        </p>
      </section>
    </form>
  );
};

export default Login;
