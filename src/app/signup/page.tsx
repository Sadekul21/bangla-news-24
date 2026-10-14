import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex  flex-col items-center justify-center mt-5">
        <h2 className="text-2xl font-bold text-red-700">সাইন আপ </h2>
      <form>
        <fieldset className="fieldset bg-base-200  rounded-box w-xs ">

          <label className="label">নাম</label>
          <input name="name" type="text" className="input w-md" placeholder="Name" />

          <label className="label">ImageUrl</label>
          <input name="image" type="Input" className="input w-md" placeholder="ImageUrl" />
          
          <label className="label">ইমেইল</label>
          <input name="email" type="email" className="input w-md" placeholder="Email" />

          <label className="label">পাসওয়ার্ড</label>
          <input name="password" type="password" className="input w-md" placeholder="Password" />
   
          <button className="btn text-white bg-red-600 mt-4">সাইন আপ করুন</button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUpPage;
