import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

// export default NextAuth(authConfig).auth;

export default auth((req) => {

  const path = req.nextUrl.pathname;
  const isRoot = path === "/";

  // not authorized
  if (!req.auth) {
    if (path.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/auth/login", req.nextUrl.origin));
    }
    return NextResponse.next();
  } else if (req.auth) {
    if (path.startsWith("/auth")) {
      return NextResponse.redirect(new URL("/dashboard", req.nextUrl.origin));
    }
    return NextResponse.next();
  }
  return NextResponse.next();

});


export const config = {
  matcher: ["/auth/login", "/dashboard/:path*", "/internationation"],
};
