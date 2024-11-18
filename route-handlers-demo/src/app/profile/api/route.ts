//33. route handlers

import { type NextRequest } from "next/server"
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    const headerList = headers()
    const theme = request.cookies.get("theme");

    (await cookies()).set("resultPerPage", "30")

    console.log(requestHeaders.get("Authorization"));
    console.log((await headerList).get("Authorization"));
    console.log(theme)
    console.log((await cookies()).get("resultPerPage"))

    return new Response("<h1>Profile API data...</h1>", {
        headers: {
            "Content-Type": "text/html",
            //42. cookies in routehandler
            "Set-Cookie": "theme=dark",
        },
    })
}

// 41. headers in route handlers
