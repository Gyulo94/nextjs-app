import { User } from "@prisma/client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

interface NavItemProps {
  mobile?: boolean;
  currentUser: User | null;
}

const NavItem = ({ mobile, currentUser }: NavItemProps) => {
  return (
    <ul
      className={`flex text-md justify-center w-full gap-4 ${
        mobile && "flex-col h-full"
      } items-center`}
    >
      <li className={`py-2 text-center border-b-4 cursor-pointer`}>
        <Link href={"/admin"}>Admin</Link>
      </li>
      <li className={`py-2 text-center border-b-4 cursor-pointer`}>
        <Link href={"/user"}>User</Link>
      </li>
      {currentUser ? (
        <li className={`py-2 text-center border-b-4 cursor-pointer`}>
          <button onClick={() => signOut()}>Sign Out</button>
        </li>
      ) : (
        <li className={`py-2 text-center border-b-4 cursor-pointer`}>
          <button onClick={() => signIn()}>Sign In</button>
        </li>
      )}
    </ul>
  );
};

export default NavItem;
