import type { NextPage } from "next";
import LoginForm from "@/modules/Login/LoginForm";

export const metadata = {
	title: "TastyTreat - Login",
}

const page: NextPage = () => {
	return <LoginForm />;
};

export default page;
