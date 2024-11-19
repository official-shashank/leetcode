import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/') {
    
    const response = NextResponse.redirect(new URL('/website', request.url));
    response.cookies.set('theme', 'dark', { path: '/' });
    return response;
  }

  // Continue with the request if not `/website`
  return NextResponse.next();
}

// clerk
const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)',"/website"])

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
    '/website',
  ],
}