const Button = ({ newUser, addUser, delAll, disable }) => {
  return (
    <div>
      <button onClick={newUser} className="btn btn-warning">
        NEW USER
      </button>
      <button
        onClick={disable ? addUser : undefined}
        className="btn btn-warning "
      >
        ADD USER
      </button>
      <button onClick={delAll} className="btn btn-danger">
        DELETE ALL
      </button>
    </div>
  );
};

export default Button;
