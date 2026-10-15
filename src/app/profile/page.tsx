"use client"

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";


const ProfilePage = () => {
    const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);

  
const [show, setShow]=useState (false)

const handleUpdateProfile =async(e:React.SubmitEvent<HTMLElement>)=>{
    e.preventDefault()
    const formdata=new FormData(e.target)
    const newUserData =Object.fromEntries(formdata.entries()) as{name:string, image:string}
    await authClient.updateUser({
    ...newUserData
})
}
const handleShowForm=()=>{
    setShow(!show)
}
    return (
        <div className="mt-5">
            <div className="flex flex-col items-center gap-2">
        <Link href={"/profile"}>
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
              <img
                alt="Tailwind-CSS-Avatar-component"
                src={user?.image as string}
              />
            </div>
          </div>
        </Link>
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
        <button onClick={handleShowForm} className="btn">Edit Profile</button>
       { show &&  <form onSubmit={handleUpdateProfile}>
        <fieldset className="fieldset bg-base-200  rounded-box w-xs ">

          <label className="label">নাম</label>
          <input name="name" type="text" className="input w-md" placeholder="Name" />

          <label className="label">ImageUrl</label>
          <input name="image" type="Input" className="input w-md" placeholder="ImageUrl" />
          
        
   
          <button type="submit" className="btn text-white bg-red-600 mt-4">update profile</button>
        </fieldset>
      </form>}
        </div>
       
        </div>
    );
};

export default ProfilePage;
