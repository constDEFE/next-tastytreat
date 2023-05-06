"use client";

import { type FC, memo } from "react";
import { IoIosCloseCircle } from "react-icons/io";

import "../styles/CloseButton.scss";

interface Props {
	handler: () => void;
}

const CloseButton: FC<Props> = memo(({ handler }) => {
	return (
		<button className="cart__close-button" onClick={handler}>
			<IoIosCloseCircle size={40} />
		</button>
	);
});

export default CloseButton;
