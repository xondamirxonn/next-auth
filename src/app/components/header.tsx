"use client";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

export const Header = () => {
  const data = useSession();

  console.log(data);

  return (
    <div className="p-5 bg-blue-500  ">
      <div className="container flex items-center justify-center gap-5">
        {data.status == "unauthenticated" ? (
          <div className="flex gap-5">
            <Link href="/login">LOgin</Link>
            <Link href="/register">Register</Link>
          </div>
        ) : (
          <Link href="/profile">Profile</Link>
        )}
      </div>
    </div>
  );
};
