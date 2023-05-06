"use client"

import type { FC } from "react";
import SlickSlider from "react-slick";
import Testimonial from "./Testimonial";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Slider.scss";

interface Props {
	testimonials: Testimonial[];
}

const Slider: FC<Props> = ({ testimonials }) => {
	const settings = {
		dots: true,
		autoplay: true,
		infinite: true,
		speed: 1000,
		autoplaySpeed: 3000,
		swipeToSlide: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false
	};

	return (
		<SlickSlider className="testimonials__slider" {...settings}>
			{testimonials.map((testimonial) => <Testimonial testimonial={testimonial} key={testimonial.id} /> )}
		</SlickSlider>
	);
};

export default Slider;
