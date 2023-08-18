import { getPage, getAllPageSlugs } from "../lib/pages";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Date from "../components/date";
import PostContent from "../components/PostContent";

export const metadata = {
    title: "My Page",
    description: "Page description goes here",
}

export async function generateStaticParams() {
    const slugs = await getAllPageSlugs();
    return slugs;
}

export default async function MyPage ({ params }) {

    const pageData = await getPage(params.slug);

    console.log(getPage);
    return (
        <>
        <SiteHeader />
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
        <SiteFooter />
        </>
    )
}