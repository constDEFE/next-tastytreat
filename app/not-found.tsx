import type { NextPage } from "next";

const NotFound: NextPage = () => {
	return (
		<section aria-labelledby="not-found-title" className="not-found">
			<div>
				<h1>
					<span>Ooops... </span>
					This page cannot be found
				</h1>
				<hr />
				<p>
					Go back to the
					<a href="/"> Homepage</a>
				</p>
			</div>
		</section>
	);
};

export default NotFound;
