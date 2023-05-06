import type { FC } from "react";
import Container from "@/shared/Container";
import Slider from "./components/Slider";
import Image from "next/image";

import "./styles/Testimonials.scss";

interface Props {
	testimonials: Testimonial[];
}

const Testimonials: FC<Props> = ({ testimonials }) => {
	return (
		<section className="testimonials" aria-labelledby="testimonials-title">
			<Container className="testimonials__container">
				<div>
					<h2 id="testimonials-title">Testimonials</h2>
					<h3>
						What our
						<span> customers </span>
						are saying
					</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore architecto voluptatum sint consectetur.
						Eveniet veniam fugit possimus nostrum, dicta rerum.
					</p>
					<Slider testimonials={testimonials} />
				</div>
				<Image
					src={"https://i.ibb.co/bBzVdNy/network.webp"}
					width={2000}
					height={2000}
					draggable={false}
					alt="Testimonials Image"
					priority
				/>
			</Container>
		</section>
	);
};

export default Testimonials;
