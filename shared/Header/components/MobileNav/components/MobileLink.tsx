"use client";

import { type FC, memo } from "react";
import Link from "next/link";

interface Props {
	href: string;
	label: string;
	onClick: () => void;
}

const MobileLink: FC<Props> = memo(({ href, label, onClick }) => {
	return (
		<li key={href}>
			<Link onClick={onClick} href={href}>
				{label}
			</Link>
		</li>
	);
});

export default MobileLink;
