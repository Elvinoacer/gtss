import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const protectedRoutes = ["/dashboard", "/analytics", "/customers", "/leads", "/docs", "/deployments"];
      const isOnProtected = protectedRoutes.some(route => nextUrl.pathname.startsWith(route));
      const isOnAuth = nextUrl.pathname.startsWith("/login") || nextUrl.pathname.startsWith("/register");
      
      if (isOnProtected) {
        if (isLoggedIn) {
          if (auth.user.role !== 'ADMIN') {
             return Response.redirect(new URL("/", nextUrl));
          }
          return true;
        }
        return false; // Redirect unauthenticated users to login page
      } else if (isOnAuth) {
        if (isLoggedIn) {
          if (auth.user.role === 'ADMIN') {
            return Response.redirect(new URL('/dashboard', nextUrl));
          }
          return Response.redirect(new URL('/', nextUrl));
        }
        return true;
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as any;
      }
      return session;
    },
  },
  providers: [], // Configure in auth.ts
} satisfies NextAuthConfig;
