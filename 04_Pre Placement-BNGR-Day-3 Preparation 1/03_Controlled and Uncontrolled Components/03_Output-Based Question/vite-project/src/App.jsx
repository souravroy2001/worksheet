import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
  });

  let ref = useRef(null);

  function handelChange(event) {
    let { name, value } = event.target;
    setUserData((pre) => ({ ...pre, [name]: value }));
  }

  function handelSubmit(event) {
    event.preventDefault();
    console.log(ref.current.email.value);
    console.log(userData);
  }

  return (
    <>
      <form action="" onSubmit={handelSubmit} ref={ref}>
        <input
          type="text"
          value={userData.name}
          name="username"
          minLength={3}
          onChange={handelChange}
        />
        <input type="email" name="email" />
        <input type="submit" value={"Submit"} />
      </form>
    </>
  );
}

export default App;
