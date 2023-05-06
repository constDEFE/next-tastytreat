import type { FC } from "react";
import Link from "next/link";

import "../styles/Navbar.scss";

interface Props {
	links: { href: string; label: string }[];
}

const Navbar: FC<Props> = ({ links }) => {
	return (
		<nav className="header__navigation">
			<ul className="navigation__menu">
				{links.map(({ href, label }) => (
					<li key={href}>
						<Link href={href}>{label}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
