"use client";

import { type FC, memo } from "react";
import { FiMenu } from "react-icons/fi";

interface Props {
	handler: () => void;
}

const MenuButton: FC<Props> = memo(({ handler }) => {
	return (
		<button className="header__mobile-button" onClick={handler}>
			<FiMenu size={28} />
		</button>
	);
});

export default MenuButton;
