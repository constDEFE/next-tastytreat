import type { FC } from "react";
import Container from "@/shared/Container";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
import Cart from "./components/Cart";
import AccountButton from "./components/AccountButton";

import "./styles/Header.scss";

const links = [
	{ href: "/", label: "Home" },
	{ href: "/foods", label: "Foods" },
	{ href: "/cart", label: "Cart" },
	{ href: "/contact", label: "Contact" }
];

const Header: FC = () => {
	return (
		<header className="header">
			<Container className="header__container">
				<Logo />
				<Navbar links={links} />
				<AccountButton />
				<Cart />
				<MobileNav links={links} />
			</Container>
		</header>
	);
};

export default Header;
