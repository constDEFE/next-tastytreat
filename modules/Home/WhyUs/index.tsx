import type { FC } from "react";
import Container from "@/shared/Container";
import Image from "next/image";
import { AiOutlineCheckCircle } from "react-icons/ai";

import "./styles/WhyUs.scss";

const bullets = [
	{
		title: "Fresh and tasty foods",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quisquam."
	},
	{
		title: "Quality support",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quisquam."
	},
	{
		title: "Order from any location",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quisquam."
	}
];

const WhyUs: FC = () => {
	return (
		<section aria-labelledby="why-us-title" className="why-us">
			<Container className="why-us__container">
				<Image
					src="https://i.ibb.co/xDzkWFY/location.webp"
					width={2000}
					height={2000}
					draggable={false}
					alt="Why Us"
					priority
				/>
				<div>
					<h2 id="why-us-title">
						Why
						<span> Tasty Treat?</span>
					</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic eaque totam, voluptates molestiae cum sequi
						iste ad ipsa omnis sit itaque. Similique doloribus dolore consequuntur nobis sint vero, dolorem ab?
					</p>
					<ul>
						{bullets.map((bullet, index) => (
							<li key={index}>
								<div className="why-us__bullet">
									<AiOutlineCheckCircle size={16} />
									<h4>{bullet.title}</h4>
								</div>
								<p>{bullet.content}</p>
							</li>
						))}
					</ul>
				</div>
			</Container>
		</section>
	);
};

export default WhyUs;
