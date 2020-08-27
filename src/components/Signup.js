import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error, register } = useContext(GlobalContext);
  let history = useHistory();

  toast.configure();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newuser = {
      name,
      email,
      password,
    };
    console.log(newuser);
    register(newuser).then((res) => {
      history.push("/login");
    });

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="container">
        <h1>Signup page</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="Name"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Password</label>
            <input
              type="text"
              className="form-control"
              name="password"
              placeholder="Enter your Password"
              value={password}
              minLength="8"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            disabled={(!name, !email, !password)}
            type="submit"
            className="btn btn-primary mt-2"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
