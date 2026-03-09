import { withAuth } from "next-auth/middleware";

export default withAuth({
    callbacks: {
        authorized: ({ token }) => {
            //ToDo: Integrar validacion por Role
            //return token?.role === "ADMIN";
            return !!token;
        },
    },
})

export const config = {
    matcher: [
        "/admin/:path*",
        "/dashboard/:path*"
    ],
}
