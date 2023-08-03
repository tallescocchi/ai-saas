import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"
import Replicate from "replicate"

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!
})

export async function POST(
  req: Request
) {
  try {
    const { userId } = auth()
    const body = await req.json()
    const { prompt } = body

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 })
    }

    const response = await replicate.run("riffusion/riffusion:0982323",
    {
      input: {
        prompt_a: prompt
      }
    })

    return NextResponse.json(response)

  } catch (error) {
    console.log("[MUSIC_ERROR]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}