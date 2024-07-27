import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import { headers } from "next/headers";
import { auth } from "../auth";
import NextAuth from "next-auth";
import { authConfig } from "../auth.config";

// export default NextAuth(authConfig).auth;

export default auth((req) => {

  const path = req.nextUrl.pathname;
  const isRoot = path === "/";

  // not authorized
  if (!req.auth) {
    console.log("SIJARUHUSIWA ..");


    if (path.startsWith("/dashboard") || isRoot) {
      console.log("SIJARUHUSIWA NMETOKA /DASHBOARD..");
      return NextResponse.redirect(new URL("/auth/login", req.nextUrl.origin));
    }
    console.log("SIJARUHUSIWA NMEETOKA /AUTH..");
    return NextResponse.next();

  } else if (req.auth) {

    console.log("NMERUHUSIWA .....");

    if (path.startsWith("/auth")) {
      console.log("NMERUHUSIWA NMETOKA /AUTH..");
      return NextResponse.redirect(new URL("/dashboard", req.nextUrl.origin));
    }

    console.log("NMERUHUSIWA NMETOKA /DASH..");
    return NextResponse.next();
  }
  return NextResponse.next();

});


export const config = {
  matcher: ["/:path*"],
};
