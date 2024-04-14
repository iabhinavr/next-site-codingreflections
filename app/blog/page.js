import { getAllWpPosts } from "../lib/posts";
import PostList from "./PostList";

export const metadata = {
    title: "Coding Reflections Blog",
    description: "Web development blog - JavaScript, PHP, CSS & more"
}

export const revalidate = 86400;

export default async function Blog() {

    const initialPosts = await getAllWpPosts();

    return (
        <>
        <PostList  initialPosts={initialPosts} />
        </>       
    )

    
}