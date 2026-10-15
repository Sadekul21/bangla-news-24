"use client"

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";


const SignUpPage = () => {
   const onSubmit =async (e:React.SubmitEvent<HTMLElement>)=>{
      e.preventDefault()
      const formData= new FormData(e.target)
      const user =Object.fromEntries(formData.entries()) as{name:string, email:string, image:string, password:string}
      const {data, error }=await  authClient.signUp.email({
        ...user,
        callbackURL:"/"
      })
     if(data){
          toast.success("Sign In successful")
          console.log(data);
          redirect("/")
        }
        if(error){
          toast.error("Something went wrong")
          console.log(error)
        }

   }

  return (
    <div className="flex  flex-col items-center justify-center mt-5">
        <h2 className="text-2xl font-bold text-red-700">সাইন আপ </h2>
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset bg-base-200  rounded-box w-xs ">

          <label className="label">নাম</label>
          <input name="name" type="text" className="input w-md" placeholder="Name" />

          <label className="label">ImageUrl</label>
          <input name="image" type="Input" className="input w-md" placeholder="ImageUrl" />
          
          <label className="label">ইমেইল</label>
          <input name="email" type="email" className="input w-md" placeholder="Email" />

          <label className="label">পাসওয়ার্ড</label>
          <input name="password" type="password" className="input w-md" placeholder="Password" />
   
          <button type="submit" className="btn text-white bg-red-600 mt-4">সাইন আপ করুন</button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUpPage;
