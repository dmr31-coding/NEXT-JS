//36. dynamic route handlers

import { comments } from "../data";

export async function GET(_request: Request, { params }: {params: { id: string }}) {
    const comment = comments.find(
        (comment) => comment.id === parseInt(params.id)
    );
    return Response.json(comment);
}


// 36. PATCH request
export async function PATCH(request: Request, { params }: { params: {id: string } } ) {
    const body = await request.json();
    const { text } = body;
    const index = comments.findIndex(
        (comment) => comment.id === parseInt(params.id)
    );
    comments[index].text = text;
    return Response.json(comments[index]);
}