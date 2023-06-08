'use client'
import {Metadata} from "next";
import {useEffect, useState} from "react";
import {Posts} from "@/components/Posts";
import {getAllPosts} from "@/services/getPosts";
import {PostSearch} from "@/components/PostSearch";


export const metadata: Metadata = {
    title: 'Blog | Next App'
}

export default function Blog() {
    const [posts, setPosts] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllPosts()
            .then(setPosts)
            .finally(() => setLoading(false))
    }, [])

    return (
        <>
            <h1>Blog page</h1>
            <PostSearch onSearch={setPosts}/>
            {loading ? <h3>LOADING...</h3> : (
                <Posts posts={posts}/>
            )}
        </>
    )
}