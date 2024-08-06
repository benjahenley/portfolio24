//* Nextjs official Middleware;
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest } from "next/server";
import { Locales } from "./infraestructure/interfaces";

export let locales: Locales[] = ["en", "es"];

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  let headers = { "accept-language": "es" };
  let languages = new Negotiator({ headers }).languages();
  let defaultLocale = "es";

  return match(languages, locales, defaultLocale); // -> 'es'
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    "/((?!_next|api|favicon.ico|photos|music|public|banners|svgs).*)",
    // Skip all internal paths (_next), API routes, favicon, and public directory
  ],
};
