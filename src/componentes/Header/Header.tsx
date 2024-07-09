// components/Header/Header.tsx
"use client";

import { useUser } from "@/context/context";
import Image from "next/image";
import GetProfilePicture from "../User/GetProfilePicture";
import logout from "@/actions/login/logout-action";

export default function Header() {
  const { user } = useUser();
  const { isAuthenticated } = useUser();

  const handleLogout = async (event: React.FormEvent) => {
    event.preventDefault();
    await logout();
    window.location.reload();
  };

  return (
    <section>
      {isAuthenticated && (
        <div className="flex flex-col gap-2">
          <div className="w-full h-4 bg-green-700 fixed"></div>

          <header className="flex items-center justify-between px-4 py-1 mt-4 bg-green-700">
            <div className="flex items-center ">
              <GetProfilePicture width="60" height="60" />
              <div className="ml-4 text-white">
                <h1 className="text-lg font-semibold">{user?.nome}</h1>
                <p className="text-sm text-white">{user?.email}</p>
              </div>
            </div>
            <form onSubmit={handleLogout} className="flex items-center">
              <button
                type="submit"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
              >
                <Image
                  src="/assets/icones/logout.svg"
                  width={24}
                  height={24}
                  alt="Logout Icon"
                />
              </button>
            </form>
          </header>
        </div>
      )}
    </section>
  );
}
