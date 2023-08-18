import { getAllTagSlugs, getTagDetails, getTagPosts } from "../../lib/taxonomies";
import PostList from "./PostList";

export async function generateStaticParams() {
    // Return a list of possible values for slug
    const paths = await getAllTagSlugs();
    return paths;
}

export async function generateMetadata({ params }) {
    const tagDetails = await getTagDetails(params.slug);

    return {
        title: 'Tag Archive: ' + tagDetails.name,
        description: 'Blog posts tagged: ' + tagDetails.slug,
    }
}

export default async function TagArchive({ params }) {

    const initialPosts = await getTagPosts(params.slug);
    const tagDetails = await getTagDetails(params.slug);

    return (
            
            <section className="mt-4 container mx-auto px-2 font-mono lg:max-w-6xl">
                <p className="text-xl py-3 italic font-bold">Found {tagDetails.count} posts tagged <span className="text-brand-yellow"> {`'${tagDetails.name}'`} </span></p>
                <PostList initialPosts={initialPosts} tagDetails={tagDetails} />
            </section>
    );
}