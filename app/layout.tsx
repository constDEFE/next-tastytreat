import type { FC, PropsWithChildren } from "react";
import { Nunito } from "next/font/google";
import localFont from "next/font/local";
import clsx from "clsx";
import Header from "@/shared/Header";
import Providers from "@/shared/Providers";
import Footer from "@/shared/Footer";

import "@/styles/globals.scss";

const nunito = Nunito({
	weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
	display: "swap",
	fallback: ["ui-sans-serif", "sans-serif"],
	subsets: ["latin"],
	variable: "--mainFont"
});

const rocknroll = localFont({
	src: "../styles/fonts/RocknRollOne-Regular.woff",
	display: "swap",
	fallback: ["ui-sans-serif", "sans-serif"],
	variable: "--titleFont"
});

export const RootLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<html>
			<body className={clsx(rocknroll.variable, nunito.variable)}>
				<Providers>
					<Header />
					<main>{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
