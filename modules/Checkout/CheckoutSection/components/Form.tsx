"use client";

import { type FC, useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { useAppSelector } from "@/hooks/useAppSelector";

import "../styles/Form.scss";

interface FormState {
	name: string;
	email: string;
	phone: string;
	country: string;
	city: string;
	postalCode: string;
}

const shipping = 30;
const initialState: FormState = {
	name: "",
	email: "",
	phone: "",
	country: "",
	city: "",
	postalCode: ""
};

const Form: FC = () => {
	const [state, setState] = useState<FormState>(initialState);
	const cartPrice = useAppSelector((state) => state.cart.totalPrice);

	const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		const { name, email, phone, country, city, postalCode } = state;

		if (name && email && phone && country && city && postalCode) {
			alert(`
        Name: ${name}\n
        Email: ${email}\n
        Phone: ${phone}\n
        Country: ${country}\n
        City: ${city}\n
        Postal Code: ${postalCode}\n
        Total: $${cartPrice + shipping}
      `);
		}
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const name = event.target.name as keyof FormState;
		const value = event.target.value as keyof FormState;

		setState((prev) => ({
			...prev,
			[name]: value
		}));
	};

	return (
		<form className="checkout__form" onSubmit={handleSubmit}>
			<fieldset>
				<legend>Shipping Address</legend>
				<input onChange={handleChange} value={state.name} name="name" type="text" placeholder="Enter your name" />
				<input onChange={handleChange} value={state.email} name="email" type="email" placeholder="Enter your email" />
				<input onChange={handleChange} value={state.phone} name="phone" type="tel" placeholder="Phone Number" />
				<input onChange={handleChange} value={state.country} name="country" type="text" placeholder="Country" />
				<input onChange={handleChange} value={state.city} name="city" type="text" placeholder="City" />
				<input onChange={handleChange} value={state.postalCode} name="postal" type="text" placeholder="Postal Code" />
				<button type="submit">Payment</button>
			</fieldset>
		</form>
	);
};

export default Form;
