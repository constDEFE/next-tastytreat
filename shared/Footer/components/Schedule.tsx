import type { FC } from "react";

import "../styles/Schedule.scss";

const Schedule: FC = () => {
	return (
		<div className="footer__schedule">
			<h3>Delivery Time</h3>
			<div>
				<div>
					<h4>Sunday - Thursday</h4>
					<p>10:00am - 11:00pm</p>
				</div>
				<div>
					<h4>Friday - Saturday</h4>
					<p>Off day</p>
				</div>
			</div>
		</div>
	);
};

export default Schedule;
