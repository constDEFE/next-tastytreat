"use client";

import type { FC } from "react";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { addItem } from "@/store/slices/cart";

interface Props {
  food: Food;
}

const AddButton: FC<Props> = ({ food }) => {
	const dispatch = useAppDispatch();

	const handleClick = (): void => {
		dispatch(addItem(food));
	};

	return <button onClick={handleClick}>Add to Cart</button>;
};

export default AddButton;
