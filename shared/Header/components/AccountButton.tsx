import type { FC } from "react";
import Link from "next/link";
import { BiUser } from "react-icons/bi";

import "../styles/AccountButton.scss";

const AccountButton: FC = () => {
	return (
		<Link className="header__account-button" href="/account">
			<BiUser size={28} />
		</Link>
	);
};

export default AccountButton;
