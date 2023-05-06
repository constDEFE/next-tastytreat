import type { FC } from "react";
import { FaChevronRight } from "react-icons/fa";
import { RiShieldCheckLine } from "react-icons/ri";
import { BiCar } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import Container from "@/shared/Container";

import "./styles/Hero.scss";

const Hero: FC = () => {
	return (
		<section aria-labelledby="hero-title" className="hero">
			<Container className="hero__container">
				<div className="hero__left">
					<p className="left__subtitle">Easy way to make an order</p>
					<h1 id="hero-title" className="left__title">
						<span>HUNGRY? </span>
						Just wait
						<br />
						food at
						<span> your door</span>
					</h1>
					<p className="left__paragraph">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus maxime placeat vitae nostrum veniam.
						Eveniet!
					</p>
					<div className="left__buttons">
						<Link href={"/cart"}>
							<button>
								Order now <FaChevronRight size={12} />
							</button>
						</Link>
						<Link href={"/foods"}>
							<button>See all foods</button>
						</Link>
					</div>
					<div className="left__row">
						<div>
							<span>
								<BiCar size={16} />
							</span>
							<p>No shipping charge</p>
						</div>
						<div>
							<span>
								<RiShieldCheckLine size={16} />
							</span>
							<p>100% secure checkout</p>
						</div>
					</div>
				</div>
				<Image
					src={"https://i.ibb.co/Y0YSfBG/hero.webp"}
					className="hero__image"
					width={2000}
					height={2000}
					alt="hero.webp"
					draggable={false}
					priority
				/>
			</Container>
		</section>
	);
};

export default Hero;
