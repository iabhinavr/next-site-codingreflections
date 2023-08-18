"use client"

import FeaturedImage from "../../components/FeaturedImage";
import Date from "../../components/date";
import Link from "next/link";
import LoadMore from "../../components/LoadMore";
import { useState } from "react";

export default function PostList({ initialPosts, categoryDetails }) {

    const [posts, setPosts] = useState(initialPosts);

    return (

        <>
            <ul className="post-list grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {posts.nodes.map((post) => (
                    <li key={post.id} className="bg-slate-800 rounded-xl transform transition ring ring-slate-800 hover:ring-slate-600">
                        <FeaturedImage post={post} />
                        <div className="p-4 space-y-4 ">
                            <h2>
                                <Link
                                    className="text-2xl font-bold text-brand-violet hover:text-brand-pink" href={`/blog/${post.slug}`}>{post.title}</Link>
                            </h2>
                            <small>
                                <Date dateString={post.date} />
                            </small>

                            <p dangerouslySetInnerHTML={{ __html: post.excerpt }}></p>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="py-4">
                <LoadMore
                    posts={posts}
                    onPostsChange={setPosts}
                    taxonomy={{ key: "categoryName", value: categoryDetails.slug }}
                />
            </div>
        </>
    )

}