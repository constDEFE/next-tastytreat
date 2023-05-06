import type { FC } from "react";
import Container from "@/shared/Container";
import Image from "next/image";
import Link from "next/link";

import "./styles/Categories.scss";

const categories = [
	{
		src: "https://i.ibb.co/xh4mLZz/category-01.webp",
		alt: "Fast Food",
		title: "Fast Food"
	},
	{
		src: "https://i.ibb.co/vZ49BpS/category-02.webp",
		alt: "Pizza",
		title: "Pizza"
	},
	{
		src: "https://i.ibb.co/dPdkJdh/category-03.webp",
		alt: "Asian Food",
		title: "Asian Food"
	},
	{
		src: "https://i.ibb.co/mGKb7w7/category-04.webp",
		alt: "Raw Meat",
		title: "Raw Meat"
	}
];

const Categories: FC = () => {
	return (
		<section aria-label="Categories" className="categories">
			<Container className="categories__container">
				{categories.map((category) => (
					<Link className="categories__item" key={category.title} href={"/"}>
						<Image src={category.src} width={64} height={64} alt={category.alt} draggable={false} />
						<p>{category.title}</p>
					</Link>
				))}
			</Container>
		</section>
	);
};

export default Categories;
