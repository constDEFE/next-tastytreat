import type { FC } from "react";

import "../styles/Contact.scss";

const Contact: FC = () => {
	return (
		<div className="footer__contact">
			<h3>Contact</h3>
			<div>
				<p>Location: ZindaBazar Sylhet-3100, Bangdalesh</p>
			</div>
			<div>
				<p>Phone: 01712345678</p>
				<p>Email: example@mail.com</p>
			</div>
		</div>
	);
};

export default Contact;
