import React, { useState } from "react";
import { normalAxios } from "../axios/axiosInstance";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handlesubmit = async e => {
    e.preventDefault();
    let payload = { email, password };
    let data = await normalAxios.post("/auth/login", payload);
    console.log(data);
    console.log(payload);
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div>
          <label htmlFor="">email</label>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button>sign in</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
