import { NextResponse, type NextRequest } from "next/server";

const SUPPORTED = ["en", "it"] as const;
type Locale = (typeof SUPPORTED)[number];
const DEFAULT_LANG: Locale = "en";

function detectFromAcceptLanguage(header: string | null): Locale {
  if (!header) return DEFAULT_LANG;
  try {
    const prefs = header
      .split(",")
      .map((part) => part.trim().split(";")[0]) // strip q
      .map((tag) => tag.split("-")[0]?.toLowerCase()) // base lang
      .filter(Boolean) as string[];
    for (const l of prefs) {
      if ((SUPPORTED as readonly string[]).includes(l)) return l as Locale;
    }
  } catch {
    // ignore parse errors and fall through
  }
  return DEFAULT_LANG;
}

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const cookieLang = req.cookies.get("lang")?.value as Locale | undefined;
  if (!cookieLang) {
    const header = req.headers.get("accept-language");
    const detected = detectFromAcceptLanguage(header);
    res.cookies.set({ name: "lang", value: detected, path: "/", maxAge: 60 * 60 * 24 * 365 });
  }
  return res;
}

export const config = {
  // Run on all pages except static assets and Next internals
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico).*)"],
};
