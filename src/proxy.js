import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  const { pathname, search } = request.nextUrl;

  if (!session) {
    const loginUrl = new URL("/auth/signin", request.url);

    const callbackUrl = pathname + search;

    loginUrl.searchParams.set("callbackUrl", callbackUrl);

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/dashboard/edit-profile", "/tiles-details/:path*"],
};
