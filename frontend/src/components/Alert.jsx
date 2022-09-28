const Alert = ({ msg }) => {
  return (
    <div className="text-center w-96 bg-red-500 px-3 py-3 mb-4 rounded-lg border-2 border-red-600">
      <span className="font-semibold">{msg}</span>
    </div>
  );
};

export default Alert;
