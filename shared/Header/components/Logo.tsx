import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import "../styles/Logo.scss";

const Logo: FC = () => {
	return (
		<Link href={"/"}>
			<div className="header__logo">
				<Image
					src={"https://i.ibb.co/FBYXxN6/res-logo.webp"}
					width={128}
					height={128}
					alt="logo.webp"
					className="logo__image"
					draggable={false}
					priority
				/>
				<span>Tasty Treat</span>
			</div>
		</Link>
	);
};

export default Logo;
