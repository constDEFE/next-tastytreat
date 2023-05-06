import type { FC } from "react";
import Container from "@/shared/Container";
import Service from "./components/Service";

import "./styles/Services.scss";

const services = [
	{
		src: "https://i.ibb.co/0tqXDQ3/service-01.webp",
		title: "Quick Delivery"
	},
	{
		src: "https://i.ibb.co/kmHXgDC/service-02.webp",
		title: "Super Dine In"
	},
	{
		src: "https://i.ibb.co/gMLmfdt/service-03.webp",
		title: "Easy Pick Up"
	}
];

const Services: FC = () => {
	return (
		<section aria-labelledby="services-title" className="services">
			<Container className="services__container">
				<div className="services__head">
					<h2 id="services-title">What we serve</h2>
					<h3>
						Just sit back at home
						<br />
						we will
						<span> take care</span>
					</h3>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, dolore!
						<br />
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, minima.
					</p>
				</div>
				<ul className="services__row">
					{services.map((service) => <Service key={service.title} {...service} /> )}
				</ul>
			</Container>
		</section>
	);
};

export default Services;
