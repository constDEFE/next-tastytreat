"use client";

import type { FC } from "react";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

const GoogleLogin: FC = () => {
	const handleSigniIn = async () => {
		await signIn("google", { redirect: true, callbackUrl: "/account" });
	};

	return (
		<button onClick={handleSigniIn} className="providers__google">
			<FaGoogle size={22} />
			Google
		</button>
	);
};

export default GoogleLogin;
