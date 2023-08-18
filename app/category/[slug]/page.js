import { getAllCategorySlugs, getCategoryDetails, getCategoryPosts } from "../../lib/taxonomies";
import PostList from "./PostList";

export async function generateStaticParams() {
    // Return a list of possible values for slug
    const paths = await getAllCategorySlugs();
    return paths;
}

export async function generateMetadata({ params }) {
    const categoryDetails = await getCategoryDetails(params.slug);
    return {
        title: 'Category Archive: ' + categoryDetails.name,
        description: 'Blog posts filed under the category: ' + categoryDetails.slug,
    }
}

export default async function CategoryArchive({ params }) {

    const initialPosts = await getCategoryPosts(params.slug);
    const categoryDetails = await getCategoryDetails(params.slug);

    return (
        <section className="mt-4 container mx-auto px-2 font-mono lg:max-w-6xl">
            <p className="text-xl py-3 italic font-bold">Found {categoryDetails.count} posts under the category <span className="text-brand-yellow"> {`'${categoryDetails.name}'`} </span></p>
            <PostList initialPosts={initialPosts} categoryDetails={categoryDetails} />
        </section>
        
    );
}