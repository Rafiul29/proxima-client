import React, { useState } from "react";
import { useSignup } from "../hooks/usesignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, error, loading } = useSignup();

  const handleSignup = async (e) => {
    e.preventDefault();

    //signup user
    await signup(email, password);
  };

  return (
    <form
      onSubmit={handleSignup}
      className="login-form flex flex-col gap-5  py-20 mx-auto max-w-sm"
    >
      <h2 className="text-4xl font-medium text-sky-400 mb-10">Signup</h2>
      <div className="form-control flex flex-col gap-5">
        <label
          htmlFor="email"
          className="cursor-pointer hover:text-sky-400 duration-300"
        >
          Email Address
        </label>
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
        <label
          htmlFor="email"
          className="cursor-pointer hover:text-sky-400 duration-300"
        >
          Password
        </label>
        <input
          type="text"
          id="password"
          placeholder="enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus:border-sky-400 duration-300"
        />
      </div>
      <button 
      disabled={loading}
        type="submit"
        className="bg-sky-400  text-slate-900 rounded-xl py-3 hover:bg-sky-500 duration-300 mt-3"
      >
        Sign up
      </button>
      {error && (
        <p
          className="bg-rose-500/20 rounded
       p-5 text-rose-500 "
        >
          {error}
        </p>
      )}
    </form>
  );
};

export default Signup;
