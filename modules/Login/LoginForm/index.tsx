import type { FC } from "react";
import GoogleLogin from "./components/GoogleLogin";

import "./styles/Login.scss";

const LoginForm: FC = () => {
	return (
		<section aria-labelledby="login-title" className="login">
			<div className="login__container">
				<h2 id="login-title">Login</h2>
				<hr />
				<div className="login__providers">
					<GoogleLogin />
				</div>
			</div>
		</section>
	);
};

export default LoginForm;


