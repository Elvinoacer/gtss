import { auth } from "@/auth"
import { NextResponse } from "next/server"
import { Role } from "@/src/generated/client"
 
export default auth((req) => {
  const isLoggedIn = !!req.auth
  const isOnDashboard = req.nextUrl.pathname.startsWith("/dashboard")
  const isOnAuth = req.nextUrl.pathname.startsWith("/login") || req.nextUrl.pathname.startsWith("/register")
  
  if (isOnDashboard) {
    if (isLoggedIn) {
      if (req.auth?.user?.role !== Role.ADMIN) {
        return NextResponse.redirect(new URL("/", req.nextUrl))
      }
      return // Allow access
    }
    return NextResponse.redirect(new URL("/login", req.nextUrl)) // Redirect unauthenticated users to login
  }

  if (isOnAuth) {
    if (isLoggedIn) {
      if (req.auth?.user?.role === Role.ADMIN) {
        return NextResponse.redirect(new URL("/dashboard", req.nextUrl))
      }
      return NextResponse.redirect(new URL("/", req.nextUrl))
    }
    return // Allow access to auth pages
  }
})
 
// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
