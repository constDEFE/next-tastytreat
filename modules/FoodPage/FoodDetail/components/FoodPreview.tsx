"use client";

import { type FC, useState } from "react";
import Image from "next/image";

import "../styles/FoodPreview.scss";

interface Props {
	food: Food;
}

const FoodPreview: FC<Props> = ({ food }) => {
	const [preview, setPreview] = useState<string>(food.image1);

	const handlePreview = (image: string) => () => {
		setPreview(image);
	};

	return (
		<div className="head__preview">
			<div className="preview__column">
				<Image
					onClick={handlePreview(food.image1)}
					src={food.image1}
					width={128}
					height={128}
					alt={"image1"}
					draggable={false}
				/>
				<hr />
				<Image
					onClick={handlePreview(food.image2)}
					src={food.image2}
					width={128}
					height={128}
					alt={"image2"}
					draggable={false}
				/>
				<hr />
				<Image
					onClick={handlePreview(food.image3)}
					src={food.image3}
					width={128}
					height={128}
					alt={"image3"}
					draggable={false}
				/>
			</div>
			<Image src={preview} width={640} height={640} alt="Food Preview" draggable={false} priority />
		</div>
	);
};

export default FoodPreview;
