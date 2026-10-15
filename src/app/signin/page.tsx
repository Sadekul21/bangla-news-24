"use client"

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const SignInPage = () => {
    const onSubmit =async (e:React.SubmitEvent<HTMLElement>)=>{
        e.preventDefault()
        const formData= new FormData(e.target)
        const user =Object.fromEntries(formData.entries()) as{name:string, email:string, image:string, password:string}
        const {data, error }=await  authClient.signIn.email({
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

    const handleGoogleSignIn=async()=>{
   const data = await authClient.signIn.social({
    provider: "google",
          });
          console.log(data)
     };

    return (
         <div className="flex  flex-col items-center justify-center mt-5">
        <h2 className="text-2xl font-bold text-red-700">সাইন ইন </h2>
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset bg-base-200  rounded-box w-xs ">

          
          <label className="label">ইমেইল</label>
          <input name="email" type="email" className="input w-md" placeholder="Email" />

          <label className="label">পাসওয়ার্ড</label>
          <input name="password" type="password" className="input w-md" placeholder="Password" />
   
          <button type="submit" className="btn text-white bg-red-600 mt-4">সাইন ইন করুন</button>
        </fieldset>
      </form>
      <button onClick={handleGoogleSignIn} className="btn">Sign in with Google</button>
    </div>
    );
};

export default SignInPage;
