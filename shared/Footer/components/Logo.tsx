import type { FC } from "react";
import Image from "next/image";

import "../styles/Logo.scss";

const Logo: FC = () => {
	return (
		<div className="footer__logo">
			<Image src="https://i.ibb.co/FBYXxN6/res-logo.webp" width={128} height={128} alt="logo.webp" draggable={false} />
			<h2>Tasty Treat</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quod veniam.</p>
		</div>
	);
};

export default Logo;
