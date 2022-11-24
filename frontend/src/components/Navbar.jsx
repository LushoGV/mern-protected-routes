import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import Modal from "./Modal";

const Navbar = () => {
  const [modalState, setModalState] = useState(false);
  const { isAuth } = useAuthContext();
  const { body } = document;

  useEffect(() => {
    modalState
      ? (body.style.overflow = "hidden")
      : (body.style.overflow = "auto");
  }, [modalState]);

  return (
    <>
      {modalState && <Modal closeModal={setModalState} />}
      <nav className="bg-slate-900 px-5 sticky top-0 z-10 w-full flex items-center justify-center shadow-2xl border-b-2 border-gray-800 mb-4 md:mb-0 lg:px-8">
        <div className="flex items-center justify-between w-full max-w-7xl">
          <Link to="/">
            <h2 className="p-6 px-0 md:py-4 md:px-0 font-bold text-lg">
              MERN-Tasks-App
            </h2>
          </Link>
          {isAuth && (
            <button
              className="h-9 pt-1 w-10 md:h-8 md:w-8 bg-red-500 font-semibold my-4 md:m-4 rounded-full hover:bg-red-600"
              onClick={() => setModalState(true)}
            >
              <span className="material-symbols-outlined">
                power_settings_new
              </span>
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
