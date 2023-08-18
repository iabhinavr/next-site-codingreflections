import { getAllPostSlugs, getSinglePostData } from "../../lib/posts";
import Date from "../../components/date";
import PostContent from "../../components/PostContent";

export async function generateMetadata({params}) {
    const postData = await getSinglePostData(params.slug);
    return {
        title: postData.title,
        description: postData.excerpt,
    }
}

export default async function Post({ params }) {

    const postData = await getSinglePostData(params.slug);

    return (

            <article className="single-post-article">
                <div className="h-[50vh] min-h-[15rem] mb-4 bg-slate-700">
                    <div className="h-full container px-2 mx-auto flex justify-center flex-col lg:max-w-3xl">
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
                
                <div className="post-content container mx-auto lg:max-w-3xl px-2 tracking-tight">
                    <PostContent content={postData.content} />
                </div>
                
            </article>

    );
}

export async function generateStaticParams() {
    // Return a list of possible values for slug
    const paths = await getAllPostSlugs();
    return paths;
}