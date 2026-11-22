import { NextRequest, NextResponse } from "next/server";

const LOCALES = ["en", "fr", "es", "de"];
const DEFAULT_LOCALE = "en";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const locale = req.cookies.get("locale")?.value ?? DEFAULT_LOCALE;
  const res = NextResponse.next();
  if (!LOCALES.includes(locale)) res.cookies.set("locale", DEFAULT_LOCALE);
  return res;
}

export const config = { matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"] };
