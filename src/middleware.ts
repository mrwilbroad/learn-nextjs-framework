import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import { headers } from "next/headers";
import Negotiator from "negotiator";

// export function middleware(request: NextRequest) {

//     const path = request.nextUrl;

//   if (request.nextUrl.pathname.startsWith("/auth/login")) {

//        const cookie = request.cookies.getAll();
//        const token = request.cookies.get("token");
//        console.log('TOKEN VALUE :',token?.value || 'No data to token..');
//        console.log(cookie);

//     // check Auth-Header
//     const isAuthorized: boolean = request.cookies.has("Auth-Cookies");
//     if(isAuthorized)
//     {
//         return NextResponse.redirect(new URL("/dashboard", request.url));
//     }

//     return NextResponse.next();
//   }

//   // cookies
//   const requestCookies = request.cookies.getAll();
// //   console.log(`Cookies :`, requestCookies);

//   // Headres
//   const requestheaders = new Headers(request.headers);
//   requestheaders.set("X-Inertia-start", "Lar-12.56");
//   requestheaders.set("X-Timer", new Date().toDateString());

//   const response = NextResponse.next({
//     request: {
//       headers: requestheaders,
//     },
//   });
//   response.cookies.set({
//     name: "nextjs-app",
//     value: "mrwilbroad123@gmail.com",
//     path: "/",
//     httpOnly: true,
//   });
//   return response;
// }

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isLogin = path == "/auth/login";
  const IsDashboardmatch = request.nextUrl.pathname.startsWith("/dashboard");
  const CookieValue = request.cookies.get("Auth-Token")?.value || "";
  if (isLogin && CookieValue) {
    console.log("Value :", CookieValue);
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
  } else if (IsDashboardmatch && !CookieValue) {
    return NextResponse.redirect(new URL("/auth/login", request.nextUrl));
  }

  // negotiator start here
  console.log("IT REACH HERE");
  let hdrs = { "accept-language": "en-US,en;q=0.5" };
  let languages = new Negotiator({ headers: hdrs }).languages();
  console.log(languages);
  let locales = ["en-US", "nl-NL", "nl"];
  let defaultLocale = "nl-NL";
  match(languages, locales, defaultLocale); // -> 'en-US'
  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/login", "/dashboard/:path*", "/internationation"],
};
