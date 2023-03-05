import React from "react";

const Footer = () => {
  return (
    <div className="footer text-center text-lg  bg-slate-800 text-slate-100 py-5 ">
      <p>
        &copy; {new Date().getFullYear()} <span  className="hover:text-sky-400 duration-300 hover:underline cursor-pointer">Proxima </span>. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
