//36. dynamic route handlers

import { redirect } from "next/navigation";
import { comments } from "../data";

export async function GET(_request: Request, { params }: {params: { id: string }}) {

    // 40. redirect in route handlers

    if (parseInt(params.id) > comments.length) {
        redirect ("/comments");
    }

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

// 37. DELETE request
export async function DELETE(request: Request, { params }: { params: {id: string } } ) {
    
    const index = comments.findIndex(
        (comment) => comment.id === parseInt(params.id)
    );

    const deletedComment = comments[index];
    comments.splice(index, 1);
    return Response.json(deletedComment);
}