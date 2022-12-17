import Layout from "../components/layout";
import { getAllPageSlugs, getPage } from "../lib/pages";
import Head from "next/head";
import Date from "../components/date";
import PostContent from "../components/PostContent";

export default function Post({ pageData }) {
    return (
        <Layout pageType="singlePost">
            <Head>
                <title key="title">{pageData.title}</title>
                <meta name="description" content={pageData.title} />
            </Head>
            <article className="single-post-article">
                <div className="h-full container mx-auto flex justify-center flex-col lg:max-w-3xl mb-4">
                    <h1 className="text-3xl font-bold py-4 text-brand-pink">{pageData.title}</h1>
                    <div>
                        <small>
                            Published by Abhinav /
                            Last updated: <Date dateString={pageData.modified} />
                        </small>
                    </div>
                </div>
                
                <div className="post-content container mx-auto lg:max-w-3xl">
                    <PostContent content={pageData.content} />
                </div>
                
            </article>
                   
        </Layout>
    );
}

export async function getStaticPaths() {
    // Return a list of possible values for slug
    const paths = await getAllPageSlugs();
    return {
        paths,
        fallback: 'blocking'
    };
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id

    console.log(params.slug);
    const pageData = await getPage(params.slug);
    return {
        props: {
            pageData,
        },
    };
}