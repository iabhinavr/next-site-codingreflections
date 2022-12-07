import Layout from "../../components/layout";
import { getAllPostSlugs, getSinglePostData } from "../../lib/wp";
import Head from "next/head";
import Date from "../../components/date";
import PostContent from "../../components/PostContent";

export default function Post({ postData }) {
    return (
        <Layout pageType="singlePost">
            <Head>
                <title key="title">{postData.title}</title>
                <meta name="description" content={postData.excerpt} />
            </Head>
            <article className="single-post-article">
                <div className="h-[50vh] min-h-[15rem] mb-4 bg-slate-700">
                    <div className="h-full container mx-auto flex justify-center flex-col lg:max-w-3xl">
                        <h1 className="text-2xl font-bold py-4 text-brand-pink">{postData.title}</h1>
                        <div>
                            <small>
                                Published by Abhinav /
                                Last updated: <Date dateString={postData.modified} />
                            </small>
                        </div>
                        <p className="py-1 my-3 pl-3 italic border-l-4 border-l-brand-ultramarine">{postData.excerpt}</p>
                    </div>
                </div>
                
                <div className="post-content container mx-auto lg:max-w-3xl">
                    <PostContent content={postData.content} />
                </div>
                
            </article>
                   
        </Layout>
    );
}

export async function getStaticPaths() {
    // Return a list of possible values for slug
    const paths = await getAllPostSlugs();
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id

    console.log('params slug...');
    console.log(params.slug);
    const postData = await getSinglePostData(params.slug);
    return {
        props: {
            postData,
        },
    };
}