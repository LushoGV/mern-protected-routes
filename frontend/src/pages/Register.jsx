import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { sendInfo, setError } = useAuthContext();
  const [formInfo, setFormInfo] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formInfo.username === "" ||
      formInfo.email === "" ||
      formInfo.password === "" ||
      formInfo.confirmPassword === ""
    ) {
      setError("All fields must be completed");
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formInfo.email)
    ) {
      setError("Invalid email");
    } else if (formInfo.password.length < 6) {
      setError("The password must be at least 6 characters");
    } else if (formInfo.password !== formInfo.confirmPassword) {
      setError("Passwords do not match");
    } else sendInfo(formInfo, 2);
  };

  const handleInputContent = (e) => {
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
          Sign Up
        </h2>
      </header>
      <section className="p-6 py-3 flex flex-col items-center">
        <div className="flex flex-col m-2 w-full">
          <span>Username</span>
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={handleInputContent}
            className="py-2 px-3 my-2 rounded-lg border-2 border-gray-800 bg-slate-900 outline-none placeholder:text-gray-600"
          />
        </div>
        <div className="flex flex-col m-2 w-full">
          <span>Email</span>
          <input
            type="email"
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
        <div className="flex flex-col m-2 w-full">
          <span>Confirm password</span>
          <input
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            onChange={handleInputContent}
            className="py-2 px-3 my-2 rounded-lg border-2 border-gray-800 bg-slate-900 outline-none placeholder:text-gray-600"
          />
        </div>
        <input
          type="submit"
          value="Sign up"
          className="font-semibold bg-green-600 p-3 mt-6 mb-4 rounded-lg w-32 hover:cursor-pointer hover:bg-green-700 disabled:bg-green-900"
        />

        <p className="flex w-full justify-center my-2">
          <span className="text-xs mr-1 text-gray-500">
            Already have an account?
          </span>
          <span
            className="text-xs font-semibold hover:cursor-pointer hover:text-gray-400"
            onClick={() => navigate("/")}
          >
            Log In
          </span>
        </p>
      </section>
    </form>
  );
};

export default Register;
