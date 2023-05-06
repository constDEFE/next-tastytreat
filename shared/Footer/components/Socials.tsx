import type { FC } from "react";
import { FaDribbble, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import "../styles/Socials.scss";

const Socials: FC = () => {
	return (
		<div className="footer__socials">
			<p>Follow:</p>
			<ul>
				<li>
					<a href="#" target="_blank" referrerPolicy="no-referrer">
						<FaFacebookF size={16} />
					</a>
				</li>
				<li>
					<a href="#" target="_blank" referrerPolicy="no-referrer">
						<FaInstagram size={16} />
					</a>
				</li>
				<li>
					<a href="#" target="_blank" referrerPolicy="no-referrer">
						<FaTwitter size={16} />
					</a>
				</li>
				<li>
					<a href="#" target="_blank" referrerPolicy="no-referrer">
						<FaDribbble size={16} />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Socials;
