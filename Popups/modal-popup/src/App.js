import { useRef, useState } from "react";
import ModalPopup from "./Components/ModalPopup";

function App() {
  const modalRef = useRef(null);
  const [hidden, setHidden] = useState(true);
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "michael007",
      password: "michael@123",
    },
    {
      id: 2,
      username: "michael007",
      password: "michael@123",
    },
    {
      id: 3,
      username: "michael007",
      password: "michael@123",
    },
    {
      id: 4,
      username: "michael007",
      password: "michael@123",
    },
    {
      id: 5,
      username: "michael007",
      password: "michael@123",
    },
    {
      id: 6,
      username: "michael007",
      password: "michael@123",
    },
    {
      id: 7,
      username: "michael007",
      password: "michael@123",
    },
  ]);

  const [id, setID] = useState(users.length + 1);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("pass@123");

  return (
    <div className="app-container">
      <button onClick={() => modalRef.current.openTrigger()}>Add User</button>
      <ModalPopup setUsers={setUsers} ref={modalRef}>
        <form className="form-container">
          <h1 className="form-title">New User</h1>
          <div className="input-container user-id-container">
            <label for="userID" className="id-label">
              ID
            </label>
            <input
              required
              disabled
              type="number"
              value={id}
              id="userID"
              className="form-input form-input--id"
              onChange={(e) => setID(e.target.value)}
            />
          </div>
          <div className="input-container username-container">
            <label for="username" className="username-label">
              Username
            </label>
            <input
              required
              type="text"
              value={username}
              id="username"
              className="form-input form-input--username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container password-container">
            <label for="userPassword" className="password-label">
              Password
            </label>
            <input
              required
              type={hidden ? "password" : "text"}
              value={password}
              id="userPassword"
              className="form-input form-input--password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <label for="showPassword" className="show-password-label">
            <input
              type="checkbox"
              id="showPassword"
              className="password--checkbox"
              onClick={() => setHidden(!hidden)}
            />
            <span className="password--span">Show Password</span>
          </label>
          <input
            type="submit"
            value="submit"
            id="add-user-btn"
            className="add-user-btn"
          />
        </form>
      </ModalPopup>
    </div>
  );
}

export default App;
