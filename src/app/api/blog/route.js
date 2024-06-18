import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {
        connectToDb();
        const posts = await Post.find();
        return NextResponse.json(posts);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: "Failed to fetch posts!" });
    }
}