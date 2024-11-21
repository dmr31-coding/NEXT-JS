"use client";

import { serverSideFunction } from "@/utils/server-utils"
import { clientSideFunction } from "@/utils/client-utils";


export default function ClientRoutePage() {

    console.log("Client route rendered")
    // const result = serverSideFunction()
    const result = clientSideFunction()
    

    return (
        <>
        <h1>ClientRoutePage</h1>
        <p>{result}</p>
        </>
        )
}