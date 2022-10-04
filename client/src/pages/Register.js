import React, { useState } from "react";

function Regeister() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

const register = () => {
  
};

  return <div>
    <form>
        <h1>Register</h1>
        <input placeholder="username" onChange={(e) => setUserName(e.target.value)}/>
        <input type = "password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={register}>Register</button>
    </form>
  </div>;
}

export default Regeister;
