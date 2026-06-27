import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export const proxy = NextAuth(authConfig).auth;
 
// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/analytics/:path*",
    "/customers/:path*",
    "/leads/:path*",
    "/docs/:path*",
    "/deployments/:path*",
    "/login",
    "/register",
  ],
}
