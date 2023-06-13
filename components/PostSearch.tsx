'use client'

import {FormEventHandler, useState} from "react";
// import {usePosts} from "@/store";
import useSWR from "swr";
import { getPostBySearch } from "@/services/getPosts";


const PostSearch = () => {
    const { mutate } = useSWR('posts')
    const [search, setSearch] = useState('')
    // const getPostsBySearch = usePosts(state => state.getPostsBySearch)

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault()

        const posts = await getPostBySearch(search)

        mutate(posts)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="search"
                placeholder="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}/>
            <button type="submit">Search</button>
        </form>
    )
}

export {PostSearch}