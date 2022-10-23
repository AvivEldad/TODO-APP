import React, { useState } from "react";

function Register() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    fetch("http://localhost:4008/register", 
    { method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "username": username,
      "password": password,
    }),
  }).then(res =>
    console.log(res));
  };

  return (
    <div>
      <form onSubmit={register}>
        <h1>Register</h1>
        <input
          placeholder="username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={register}>Register</button>
      </form>
    </div>
  );
}

export default Register;
