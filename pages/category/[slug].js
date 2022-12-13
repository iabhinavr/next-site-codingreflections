import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import { getAllWpPosts, getMorePosts } from "../../lib/posts";
import Link from "next/link";
import Date from "../../components/date";
import FeaturedImage from "../../components/FeaturedImage";
import { use, useEffect, useState } from "react";
import LoadMore from "../../components/LoadMore";
import { getAllCategorySlugs, getCategoryDetails, getCategoryPosts } from "../../lib/taxonomies";

export async function getStaticProps({ params }) {
  const allWpPosts = await getCategoryPosts(params.slug);
  const categoryDetails = await getCategoryDetails(params.slug);
  return {
    props: {
      allWpPosts: allWpPosts,
      categoryDetails: categoryDetails
    },
  };
}

export async function getStaticPaths() {
  // Return a list of possible values for slug
  const paths = await getAllCategorySlugs();
  return {
      paths,
      fallback: false
  };
}

export default function CategoryArchive({ allWpPosts, categoryDetails }) {

  const [posts, setPosts] = useState(allWpPosts);

  return (
    <Layout pageType="blogHome">
      <Head>
        <title>Blog</title>
      </Head>
      <section className="mt-4 container mx-auto px-2 font-mono lg:max-w-6xl">
        <p className="text-xl py-3 italic font-bold">Found {categoryDetails.count} posts under the category <span className="text-brand-yellow"> {`'${categoryDetails.name}'`} </span></p>
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
                </div>
            </li>
          ))}
        </ul>
        <div className="py-4">
          <LoadMore 
          posts={posts} 
          onPostsChange={setPosts} 
          taxonomy={{key: "categoryName", value: categoryDetails.slug}} 
          />
        </div>
      </section>
    </Layout>
  );
}