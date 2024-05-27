import { NextResponse , type NextRequest} from "next/server";

export function middleware(request:NextRequest){
    

    const response = NextResponse.next()

    const themePreference = request.cookies.get("theme")
    if(!themePreference){
        response.cookies.set("theme","dark")
    }

    //custom header
    response.headers.set("custom-header","custom-value")

    return response
    //Method 2
    //This means whenever a route is requested then this middleware will make sure that the route is redirected to the specified route name "/hello".
    // if(request.nextUrl.pathname === "/profile"){
    //     return NextResponse.redirect(new URL("/hello",request.url))
    // }

    //Method 2
    //Method 1
    //return NextResponse.redirect(new URL("/",request.url))
}

// export const config = {
//     matcher: "/profile"
// }
//matcher is something that is used to match the url and then redirect to the url that is specified in the middleware