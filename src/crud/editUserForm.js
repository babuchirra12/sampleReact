import React, { useState, useEffect } from "react";

const EditUserForm = ({ editing, currentUser, setEditing, setCurrentUser, updateUser, addUser }) => {

  const initialFormState = { id: null, name: "", username: "" };

  const [user, setUser] = useState(
    editing ? currentUser : initialFormState
  );

  const handleInputChange = event => {

    const { name, value } = event.target;




    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  const resetAddUser = () => {
    setEditing(false);
    setUser(initialFormState);
    setCurrentUser(initialFormState);
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!user.name || !user.username) return;

        editing ? updateUser(user.id, user) : addUser(user);
        resetAddUser();
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button>{editing ? "Update user" : "Add user"}</button>

      {editing && (
        <button onClick={resetAddUser} className="button muted-button">
          Cancel
        </button>
      )}

     
    </form>
  );
};

export default EditUserForm;
