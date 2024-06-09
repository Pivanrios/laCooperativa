import { NextResponse, NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(NextRequest) {
  if (await isAuthenticated(NextRequest) === false){
    return new NextResponse("Unauthorized", {
        status: 401, headers: {"WWW-Authenticate": "Basic"}
    })
  }
    
}
async function isAuthenticated(req){
    const authHeader = req.headers.get("authorization") || req.headers.get("Authorization");

    if (authHeader == null ) return false
    console.log("auth header:", authHeader);
    const [username, password] = Buffer.from(authHeader.split(" ")[1], "base64").toString().split(":")
    console.log("username:", username, password) ;

    return username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASS

}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/admin/:path',
}