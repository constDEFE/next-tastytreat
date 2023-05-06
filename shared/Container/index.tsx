import type { FC, PropsWithChildren, HTMLAttributes } from "react";
import clsx from "clsx";

import "./styles/Container.scss";

const Container: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({ className, children }) => {
	return <div className={clsx("container", className)}>{children}</div>;
};

export default Container;
