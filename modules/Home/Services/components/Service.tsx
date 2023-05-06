import type { FC } from "react";
import Image from "next/image";

import "../styles/Service.scss";

interface Props {
	title: string;
	src: string;
}

const Service: FC<Props> = ({ title, src }) => {
	return (
		<li className="row__item">
			<Image src={src} draggable={false} width={200} height={165} alt={title} />
			<h4>{title}</h4>
			<p>
				Lorem ipsum dolor sit amet consectetur.
				<br />
				Lorem ipsum dolor sit.
			</p>
		</li>
	);
};

export default Service;
