"use client";

import { type FC, type FormEvent, useRef } from "react";
import { getRandomId } from "@/utils/getters";
import { useSession } from "next-auth/react";

import "../styles/ReviewForm.scss";

interface Props {
	onSubmit: (review: Review) => Promise<void>;
}

const ReviewForm: FC<Props> = ({ onSubmit: submit }) => {
	const { data: session } = useSession();
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
		event.preventDefault();

		if (session && textareaRef.current) {
			await submit({
				id: getRandomId(),
				author: session.user?.name!,
				email: session.user?.email!,
				content: textareaRef.current.value
			});

			alert("Your review is successfully submitted and will be displayed within 1 hour.");

			textareaRef.current.value = "";
		} else {
			alert("You have to be signed in to add reviews.");
		}
	};

	return (
		<form className="reviews__form" onSubmit={handleSubmit}>
			<textarea ref={textareaRef} name="content" id="content" maxLength={512} placeholder="Write your review" />
			<button type="submit">Submit</button>
		</form>
	);
};

export default ReviewForm;
