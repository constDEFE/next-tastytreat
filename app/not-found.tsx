import type { NextPage } from "next";
import Link from "next/link";

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
					<Link href="/"> Homepage</Link>
				</p>
			</div>
		</section>
	);
};

export default NotFound;
