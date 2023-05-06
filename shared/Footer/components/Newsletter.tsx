import type { FC } from "react";
import { RiSendPlaneLine } from "react-icons/ri";

import "../styles/Newsletter.scss";

const Newsletter: FC = () => {
	return (
		<div className="footer__newsletter">
			<h3>Newsletter</h3>
			<p>Subscribe to our Newsletter</p>
			<form>
				<input type="email" required placeholder="Enter your email..." />
				<button>
					<RiSendPlaneLine size={18} />
				</button>
			</form>
		</div>
	);
};

export default Newsletter;
