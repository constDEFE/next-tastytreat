import type { FC } from "react";
import clsx from "clsx";
import MobileLink from "./MobileLink";

interface Props {
	handler: () => void;
	isOpen: boolean;
	links: { href: string; label: string }[];
}

const MenuContainer: FC<Props> = ({ links, isOpen, handler }) => {
	return (
		<div onClick={handler} className={clsx("header__overlay", isOpen && "active")}>
			<nav onClick={(e) => e.stopPropagation()} className={clsx("header__mobile-nav", isOpen && "active")}>
				<ul className="mobile-nav__menu">
					{links.map(({ href, label }) => (
						<MobileLink key={href} onClick={handler} href={href} label={label} />
					))}
				</ul>
			</nav>
		</div>
	);
};

export default MenuContainer;
