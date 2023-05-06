"use client";

import type { FC, PropsWithChildren } from "react";
import { store } from "@/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

const Providers: FC<PropsWithChildren> = ({ children }) => {
	return (
		<SessionProvider>
			<Provider store={store}>{children}</Provider>
		</SessionProvider>
	);
};

export default Providers;
