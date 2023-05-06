"use client"

import type { FC } from "react";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { removeAllItems } from "@/store/slices/cart";
import { FiTrash2 } from "react-icons/fi";

interface Props {
  id: number
}

const RemoveButton: FC<Props> = ({ id }) => {
  const dispatch = useAppDispatch()

  const handleDeleteButton = (id: number) => () => {
    dispatch(removeAllItems(id));
  };

	return (
		<button onClick={handleDeleteButton(id)}>
			<FiTrash2 size={24} />
		</button>
	);
};

export default RemoveButton;
