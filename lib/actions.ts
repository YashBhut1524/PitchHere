"use server"

import { auth } from "@/auth"
import { parseServerResponse } from "./utils"
import slugify from "slugify"
import { writeClient } from "@/sanity/lib/write-client"

export const createPitch = async (state: Record<string, unknown>, form: FormData, link: string, pitch: string) => {
    const session = await auth()
    
    if(!session) 
        return parseServerResponse({
            error: "Not signed in", 
            status: "ERROR"
        })

    // const {title, description, category} = Object.fromEntries(Array.from(form).filter(([key]) => key !== "pitch" && key !== "link"));
    const formEntries = Object.fromEntries(form.entries());
    const { title, description, category } = formEntries;


    const  slug = slugify(title as string, {lower: true, strict: true})

    try {
        const startup = {
            title,
            description,
            category,
            image: link,
            slug: {
                _type: slug,
                current: slug
            },
            author: {
                _type: "refrence",
                _ref: session?.id,
            },
            pitch,
            views: 0
        }

        const result = await writeClient.create({_type: "startup", ...startup})

        return parseServerResponse({
            ...result,
            error: "",
            status: "SUCCESS"
        })
    } catch (error) {
        console.log(error)
        return parseServerResponse({
            error: JSON.stringify(error),
            status: "ERROR"
        })
    }
}