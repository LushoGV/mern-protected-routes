import { useAuthContext } from "../context/AuthContext";

const Modal = ({closeModal}) => {
  const { logOut } = useAuthContext();

  return (
    <section className="fixed z-50 top-0 left-0 w-full h-full flex justify-center items-start bg-black bg-opacity-30">
      <div className="shadow-2xl bg-slate-900 border-2 border-gray-700 rounded-lg mt-48 lg:mt-48 w-80 flex flex-col items-center">
        <h1 className="text-2xl font-semibold border-b-2 border-gray-700 w-full p-4 text-center">
          Log out?
        </h1>
        <div className="flex w-full justify-center items-center py-6">
          <button className="p-2 w-28 mr-3 rounded-md text-lg font-semibold border-2 border-gray-700 hover:bg-gray-700 hover:border-gray-800" 
            onClick={() => {closeModal(false)}}
          >
            No
          </button>
          <button className="p-2 w-28 rounded-md text-lg font-semibold bg-red-500 border-2 border-red-500 hover:bg-red-600" 
          onClick={() => {closeModal(false), logOut()}}
          >
            Yes
          </button>
        </div>
      </div>
    </section>
  );
};

export default Modal;
