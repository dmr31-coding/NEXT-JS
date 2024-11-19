//43. caching in routehandlers

export const  dynamic = "force-dynamic";

export async function GET() {
    return Response.json({
        time: new Date().toLocaleTimeString(),
    })
}