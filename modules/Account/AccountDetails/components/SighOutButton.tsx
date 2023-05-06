"use client";

import type { FC } from "react"
import { signOut } from "next-auth/react";

const SighOutButton: FC = () => {
  const handleSignOut = async () => {
    await signOut({ redirect: true, callbackUrl: "/" });
  }

  return (
    <button onClick={handleSignOut}>Sign Out</button>
  );
};

export default SighOutButton;