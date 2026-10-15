// "use client";

// import { authClient } from "@/lib/auth-client";

// const UserInfo = () => {
//   const { data: session } = authClient.useSession();
//   const user = session?.user;
//   console.log(user);
//    const handleSignout=async()=>{
//     await authClient.signOut();

//    }
//   return (
//     <div className="absolute right-0 flex gap-2">
//       {user ? (
//         <div className="flex flex-col items-center gap-2">
//           <div className="avatar">
//             <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
//               <img
//                 alt="Tailwind-CSS-Avatar-component"
//                 src={user?.image as string}
//               />
//             </div>
//           </div>
//           <h2>{user.name}</h2>
//           <button onClick={handleSignout} className="btn btn-error btn-xs">Signout</button>
//         </div>
//       ) : (
//         <div >
//           <button className="btn">সাইন ইন</button>

//           <button className="btn btn-error bg-red-800 text-white">
//             সাইন আপ
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserInfo;


"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);
   const handleSignout=async()=>{
    await authClient.signOut();

   }
  return (
    <div className="absolute right-0 flex gap-2">
      {user ? (
        <div className="flex flex-col items-center gap-2">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
              <img
                alt="Tailwind-CSS-Avatar-component"
                src={user?.image as string}
              />
            </div>
          </div>
          <h2>{user.name}</h2>
          <button onClick={handleSignout} className="btn btn-error btn-xs">Signout</button>
        </div>
      ) : (
        <div >
          <Link href={'/signin'}><button className="btn">সাইন ইন</button>
          </Link>

         <Link href={"/signup"}>
          <button className="btn btn-error bg-red-800 text-white">
            সাইন আপ
          </button>
         </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
