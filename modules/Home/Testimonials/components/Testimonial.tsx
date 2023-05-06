import type { FC } from "react";
import Image from "next/image";

interface Props {
	testimonial: Testimonial;
}

const Testimonial: FC<Props> = ({ testimonial }) => {
	return (
		<div className="slider__testimonial">
			<blockquote>{`"${testimonial.content}"`}</blockquote>
			<div className="testimonial__row">
				<Image src={testimonial.image} width={100} height={150} alt="Author" />
				<p>{testimonial.author}</p>
			</div>
		</div>
	);
};

export default Testimonial;
