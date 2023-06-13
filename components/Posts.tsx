'use client'
import Link from "next/link";
import { useEffect } from "react";
import {usePosts} from "@/store";
import {shallow} from "zustand/shallow";


const Posts = () => {
    const [posts, loading, getAllPosts] = usePosts (
        (state) => [state.posts, state.loading, state.getAllPosts],
        shallow
    )

    useEffect(() => {
        getAllPosts()
    }, [getAllPosts])

    return loading ? ( <h3>LOADING...</h3>
        ) : (
        <ul>
            {posts.map((post: any) => (
                <li key={post.id}>
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    )
}

export {Posts}