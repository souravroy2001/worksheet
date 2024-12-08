import { useState } from "react";
import "./App.css";

/**
 * The App component serves as the parent component.
 * It manages the state to toggle between View and Edit modes.
 */
function App() {
  const [isEditMode, setIsEditMode] = useState(false);
  let [userData, setUserData] = useState({
    name: "Jane Doe",
    email: "jane.doe@example.com",
    bio: "Web Developer",
  });

  // User data to be passed as props
  //   const userData = {
  //     name: "Jane Doe",
  //     email: "jane.doe@example.com",
  //     bio: "Web Developer",
  //   };

  let [message, setMessage] = useState("")

  function handelSave(updatedData) {
    setUserData(updatedData)
    setMessage("User updated successfully!")

    setTimeout(() => {
        setMessage("")
    }, 5000);

  }

  return (
    <div>
      <button onClick={() => setIsEditMode(!isEditMode)}>
        {isEditMode ? "View Profile" : "Edit Profile"}
      </button>
      {message ? <p>{message}</p> : ""}
      {isEditMode ? (
        <EditProfile user={userData} onSave={handelSave} />
      ) : (
        <UserProfile user={userData} />
      )}
    </div>
  );
}

/**
 * UserProfile component renders the user's information in View Mode.
 */
function UserProfile({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Bio: {user.bio}</p>
    </div>
  );
}

/**
 * EditProfile component provides input fields to edit the user's details.
 * The fields are pre-populated with existing data using defaultValue.
 */
function EditProfile({ user, onSave }) {
let [updatedUser, setUpdatedData] = useState({...user})
  function handelChange(e) {
    let { name, value } = e.target;
    setUpdatedData({ ...user, [name]: value });
  }

  function handelSubmit(e) {
    e.preventDefault();
    onSave(updatedUser)
    console.log(updatedUser);
  }

  return (
    <form onSubmit={handelSubmit}>
      <br />
      <input
        type="text"
        name="name"
        value={updatedUser.name}
        onChange={handelChange}
      />{" "}
      <br /> <br />
      <input
        type="email"
        name="email"
        value={updatedUser.email}
        onChange={handelChange}
      />
      <br /> <br />
      <textarea value={updatedUser.bio} name="bio" onChange={handelChange}></textarea>
      <br /> <br />
      <button type="submit">Save</button>
    </form>
  );
}

export default App;
