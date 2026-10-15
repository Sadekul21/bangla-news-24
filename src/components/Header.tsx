
import Image from "next/image";
import Navlinks from "./Navlinks";
import UserInfo from "./UserInfo";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="relative flex flex-col items-center justify-center px-6 py-5">

      {/* Logo + Title + Date - Center */}
      <div className="flex items-center gap-3">
        <Image
          src="/logo.webp"
          alt="Bangla News 24 Logo"
          width={50}
          height={50}
          className="h-12 w-12 object-contain"
        />

        <div className="text-center">
          <h2 className="text-2xl font-bold">
            Bangla News 24
          </h2>

          <p className="text-sm text-gray-500">
            {date}
          </p>
        </div>
      </div>

      {/* Sign In + Sign Up - Right */}
         <UserInfo/>
        <Navlinks/>
    </header>
  );
};

export default Header;
