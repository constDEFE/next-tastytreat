"use client";

import { type FC, useCallback, useState } from "react";
import MenuButton from "./components/MenuButton";
import MenuContainer from "./components/MenuContainer";

import "../../styles/MobileNav.scss";

interface Props {
	links: { href: string; label: string }[];
}

const MobileNav: FC<Props> = ({ links }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

	return (
		<>
			<MenuButton handler={toggleMenu} />
			<MenuContainer isOpen={isOpen} handler={toggleMenu} links={links} />
		</>
	);
};

export default MobileNav;
