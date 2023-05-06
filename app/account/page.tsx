import AccountDetails from "@/modules/Account/AccountDetails";
import { AuthOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async () => {
	const session = await getServerSession(AuthOptions);

	if (!session) {
		redirect("/login");
	} else {
		return <AccountDetails session={session} />;
	}
};

export const generateMetadata = async () => {
	const session = await getServerSession(AuthOptions);

	return {
		title: `TastyTreat - ${session?.user?.name}`
	};
};

export default page;
