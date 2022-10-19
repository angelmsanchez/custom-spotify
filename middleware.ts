import { NextRequest, NextResponse } from "next/server";

const signedInPages = ["/", "/playlist", "/library"];

export default function middleware(request: NextRequest) {
  if (signedInPages.find((page) => page === request.nextUrl.pathname)) {
    const token = request.cookies.get('TRAX_ACCESS_TOKEN');
    if (!token) {
      const url = request.nextUrl.clone();
      url.pathname = '/signin';
      return NextResponse.rewrite(url);
    }
  }
}
