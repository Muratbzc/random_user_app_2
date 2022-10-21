const Button = ({ newUser, addUser, delAll }) => {
  return (
    <div>
      <button onClick={newUser} className="btn btn-warning me-5">
        NEW USER
      </button>
      <button onClick={addUser} className="btn btn-warning me-5">
        ADD USER
      </button>
      <button onClick={delAll} className="btn btn-danger ms-5">
        DELETE ALL
      </button>
    </div>
  );
};

export default Button;
