import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form className="login-form flex flex-col gap-5  py-20 mx-auto max-w-sm">
      <h2 className="text-4xl font-medium text-sky-400 mb-10">Login</h2>
      <div className="form-control flex flex-col gap-5">
        <label htmlFor="email" className="cursor-pointer hover:text-sky-400 duration-300">Email Address</label>
        <input
          type="text"
          id="email"
          placeholder="hello@react.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus:border-sky-400 duration-300"
        />
      </div>
      
      <div className="form-control flex flex-col gap-5">
        <label htmlFor="email" className="cursor-pointer hover:text-sky-400 duration-300">Password</label>
        <input
          type="text"
          id="password"
          placeholder="enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus:border-sky-400 duration-300"
        />
      </div>
      <button type="submit" className="bg-sky-400  text-slate-900 rounded-xl py-3 hover:bg-sky-500 duration-300 mt-3">Log In</button>
    </form>
  );
};

export default Login;
