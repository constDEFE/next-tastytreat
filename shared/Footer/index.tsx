import type { FC } from "react";
import Container from "@/shared/Container";
import Logo from "./components/Logo";
import Schedule from "./components/Schedule";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";
import Socials from "./components/Socials";

import "./styles/Footer.scss"

const Footer: FC = () => {
	return (
		<footer className="footer">
			<Container className="footer__container">
				<div>
					<Logo />
					<Schedule />
					<Contact />
					<Newsletter />
				</div>
				<div>
					<div>
						<p>&#169;Tasty Treats. All rights reserved.</p>
					</div>
					<Socials />
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
