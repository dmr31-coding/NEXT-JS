//34. GET request

import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    const fileterdComments = query ? comments.filter((comment) => comment.text.includes(query)) : comments;
    return Response.json(fileterdComments);
}


//35. POST request
export async function POST(request: Request) {
    const comment = await request.json();
    const newComment = {
        id: comments.length + 1,
        text: comment.text,
    };
    comments.push(newComment);
    return new Response(JSON.stringify(newComment), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201,
    });
}
