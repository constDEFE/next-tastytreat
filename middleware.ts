import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
	async (req) => {
		const pathname = req.nextUrl.pathname;

		const isAuth = await getToken({ req });
		const isLoginPage = pathname.startsWith("/login");

		const sensitiveRoutes = ["/account"];
		const isAccessingSensitiveRoute = sensitiveRoutes.some((route) => pathname.startsWith(route));

		if (isLoginPage) {
			if (isAuth) {
				return NextResponse.redirect(new URL("/", req.url));
			}

			return NextResponse.next();
		}

		if (!isAuth && isAccessingSensitiveRoute) {
			return NextResponse.redirect(new URL("/login", req.url));
		}
	},
	{
		callbacks: {
			authorized: async () => true
		}
	}
);

export const config = {
	matchter: ["/account", "/login"]
};
