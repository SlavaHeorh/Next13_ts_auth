'use client'
import Link from "next/link";
import useSWR from "swr";
import {getAllPosts} from "@/services/getPosts";
// import { useEffect } from "react";
// import {usePosts} from "@/store";
// import {shallow} from "zustand/shallow";


const Posts = () => {
    const {data: posts, isLoading} = useSWR('posts', getAllPosts)

    // const [posts, loading, getAllPosts] = usePosts (
    //     (state) => [state.posts, state.loading, state.getAllPosts],
    //     shallow
    // )
    //
    // useEffect(() => {
    //     getAllPosts()
    // }, [getAllPosts])

    return isLoading ? ( <h3>LOADING...</h3>
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