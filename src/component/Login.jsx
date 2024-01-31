import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

function Login() {
  const { setUser } = useContext(UserContext);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [error, setError] = useState(true);

  const arr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const randNum = Math.floor(Math.random() * arr.length + 1);
  const Id = arr[randNum];
  const date = Date.now();
  useEffect(() => {
    setUserId(Id + date + "A");
  }, []);

  const navigate = useNavigate();

  const handleU = () => {
    if (userName.trim() !== "") {
      setError(!error);
      return (!error);
    }else{
        setError(error)
        return error
    }
  };
  const handleE = () => {
    if (email.trim() !== "") {
      setError(!error);
      return (!error);
    }else{
        setError(error)
        return error
    }
  };
  const handleP = () => {
    if (password.trim() !== "") {
      setError(!error);
      return (!error);
    }else{
        setError(error)
        return error
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName !== "" && userName.indexOf('@') && isNaN(userName) && userName.indexOf('.')== -1 && email !== "" && password !== "" && password.length >=3) {
      setUser({ userName, email, password, userId });
      navigate("/profile");
    } else {
      alert("You are trying to send an empty field!");
    }
  };
  return (
    <div style={{backgroundColor:"aliceblue", width: '100%',maxHeight:'100vh', padding: '10px', border: '2px solid black'}}>
      <h2>CONTEXT API USING LOGIN FORM</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Name">Name: </label>
          <input
            type="text"
            name="Name"
            value={userName}
            onBlur={handleU}
            onChange={(e) => setUserName(e.target.value)}
            style={{ padding: "10px", width: "300px", margin: "10px" }}
          required/>
          {error ? (
            <p style={{ color: "red" }}>Username is required!</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="Email">Email: </label>
          <input
            type="email"
            name="Email"
            value={email}
            onBlur={handleE}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: "10px", width: "300px", margin: "10px" }}
          required/>
          {error ? <p style={{ color: "red" }}>Email is required!</p> : null}
        </div>
        <div>
          <label htmlFor="password">Password: </label>

          <input
            type="password"
            name="password"
            value={password}
            onBlur={handleP}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "10px", width: "300px", margin: "10px" }}
          required/>
          {error ? <p style={{ color: "red" }}>Password is required!</p> : null}
        </div>
        <button
          type="submit"
          style={{
            padding: "10px",
            cursor: "pointer",
            width: "100px",
            margin: "10px",
            backgroundColor: "grey",
            color: "white",
            border: "none",
          }}
        >
          Submit
        </button>
        <br />
        <br />
      </form>
    </div>
  );
}

export default Login;
