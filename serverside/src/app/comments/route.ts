import { headers } from "next/headers";
import { comments } from "./data";
import { stat } from "fs";

export async function GET() {
  return Response.json(comments);
}

export async function POST(request: Request){
  //The line const comment = await request.json(); is used to parse the body of an incoming HTTP request as JSON.
  const comment = await request.json();
  const newcomment = {
    id: comments.length + 1,
    text: comment.text,
  }
  comments.push(newcomment)
  return new Response(JSON.stringify(newcomment),{
    headers: {
      "Content-Type": "application/json"
    },
    status: 201,
  })
}