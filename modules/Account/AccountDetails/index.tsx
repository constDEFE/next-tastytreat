import type { FC } from "react";
import type { Session } from "next-auth";
import SignOutButton from "./components/SighOutButton";
import Image from "next/image";

import "./styles/AccountDetails.scss";

interface Props {
	session: Session;
}

const AccountDetails: FC<Props> = ({ session }) => {
	return (
		<section aria-labelledby="account-title" className="account">
			<div>
				{session.user?.image && <Image src={session.user.image} alt="User Image" width={64} height={64} />}
				<h1 id="account-title">Welcome {session.user?.name}</h1>
				<hr />
				<div>
					<p>Your Email: {session.user?.email}</p>
				</div>
				<SignOutButton />
			</div>
		</section>
	);
};

export default AccountDetails;
