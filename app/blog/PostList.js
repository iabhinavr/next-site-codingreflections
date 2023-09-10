'use client';

import { useState } from "react";
import LoadMore from "../components/LoadMore";
import FeaturedImage from "../components/FeaturedImage";
import Link from "next/link";
import Date from "../components/date";

export default function PostList({initialPosts}) {
    const [posts, setPosts] = useState(initialPosts);

    return (
        <section className="mt-4 container mx-auto px-2 lg:max-w-5xl">
            <ul className="post-list">
                {posts.nodes.map((post) => (
                    <li key={post.id} className="bg-slate-800 rounded-xl transform transition ring ring-slate-800 hover:ring-slate-600 grid sm:grid-cols-7 gap-4 mb-4">
                        <div className="sm:col-span-3 [&>a>img]:w-full [&>a>img]:h-full [&>a>img]:object-contain">
                            <FeaturedImage post={post} />
                        </div>

                        <div className="p-4 space-y-2 sm:col-span-4">
                            <small>
                                <Date dateString={post.date} />
                            </small>
                            <h2>
                                <Link
                                    className="text-2xl font-bold text-brand-violet hover:text-brand-pink" href={`/blog/${post.slug}`}>{post.title}</Link>
                            </h2>


                            <div dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
                            <div className="flex justify-between">
                                <div>
                                    {
                                        post.tags.nodes.map((tag) => (
                                            <Link key={tag.slug} className="italic hover:underline" href={`/tag/${tag.slug}`}>#{tag.name} </Link>
                                        ))
                                    }
                                </div>
                                <div>
                                    {
                                        post.categories.nodes.map((category) => (
                                            <Link key={category.slug} className="font-bold hover:text-brand-ultramarine transition" href={`/category/${category.slug}`}>[{category.name}]</Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="py-4">
                <LoadMore
                    posts={posts}
                    onPostsChange={setPosts}
                    taxonomy={null}
                />
            </div>
        </section>
    );
}