import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getAllWpPosts, getMorePosts } from "../lib/wp";
import Link from "next/link";
import Date from "../components/date";
import FeaturedImage from "../components/FeaturedImage";
import { use, useEffect, useState } from "react";
import LoadMore from "../components/LoadMore";

export async function getStaticProps() {
  const allWpPosts = await getAllWpPosts();
  return {
    props: {
      allWpPosts,
    },
  };
}

export default function Home({ allWpPosts }) {

  const [posts, setPosts] = useState(allWpPosts);

  return (
    <Layout pageType="home">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="mt-4 container mx-auto px-2 font-mono lg:max-w-6xl">
        <ul className="post-list grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {posts.nodes.map(( post ) => (
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
                  <div className="flex justify-between">
                    <div>
                    {
                      post.tags.nodes.map(( tag ) => (
                        <Link key={tag.slug} className="italic hover:underline" href={`/tag/${tag.slug}`}>#{tag.name} </Link>
                      ))
                    }
                    </div>
                    <div>
                    {
                      post.categories.nodes.map(( category ) => (
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
          <LoadMore posts={posts} onPostsChange={setPosts} />
        </div>
      </section>
    </Layout>
  );
}