import React from "react";

export const Contact = () => {
  return (
    <div className="contact-page-wrapper flex items-center justify-center flex-col my-24 mx-0">
      <h1 className="primary-heading max-w-screen-lg">Have Question In Mind?</h1>
      <h1 className="primary-heading max-w-screen-lg">Let Us Help You</h1>
      <div className="contact-form-container bg-white max-w-screen-md w-full mt-12 flex items-center justify-center p-4 rounded-3xl">
        <input className="h-full border-8 border-black text-xl outline-none py-2 px-4 flex" type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button py-4 px-10 bg-slate-600 outline-none border-none rounded-3xl text-lg cursor-pointer font-semibold text-white transition-all flex items-center justify-center">Submit</button>
      </div>
    </div>
  );
};

export default Contact;