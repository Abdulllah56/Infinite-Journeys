import { NextResponse } from 'next/server';

// Array of paths that should be publicly accessible
const publicPaths = [
  '/',
  '/about',
  '/contact',
  '/experiences',
  '/destinations',
  '/api/auth/login',
  '/api/auth/register',
  '/api/contact',
];

// Helper function to check if the path is public
const isPublicPath = (path) => {
  return publicPaths.some(publicPath => {
    if (publicPath.endsWith('*')) {
      const prefix = publicPath.slice(0, -1);
      return path.startsWith(prefix);
    }
    return path === publicPath;
  });
};

export function middleware(request) {
  // Get the pathname of the request (e.g. /protected-route)
  const { pathname } = request.nextUrl;
  
  // Check if the path is public
  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }
  
  // Check if user is authenticated (has a token)
  const token = request.cookies.get('token')?.value;
  
  // If no token and trying to access protected route, redirect to login
  if (!token) {
    // Only redirect API requests to return an error
    if (pathname.startsWith('/api/')) {
      return NextResponse.json(
        { message: 'Authentication required' },
        { status: 401 }
      );
    }
    
    // Redirect to login with the original URL as a parameter
    const url = new URL('/login', request.url);
    url.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(url);
  }
  
  // Continue to the protected route
  return NextResponse.next();
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: [
    /*
     * Match all API routes except for public ones
     * Match all private routes (add them here as needed)
     */
    '/api/:path*',
    '/profile',
    '/dashboard',
    '/bookings',
  ],
}; 