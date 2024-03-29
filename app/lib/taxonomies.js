import graphqlRequest from "./graphqlRequest";

export async function getAllCategorySlugs() {
    const query = {
        query: `query getAllCategorySlugs {
                    categories {
                        nodes {
                            slug
                        }
                    }
                }`
    };

    const resJson = await graphqlRequest(query);
    const categories = resJson.data.categories.nodes;

    console.log(categories);

    return categories.map((category) => {
       return {
            slug: category.slug
       }
    });
}

export async function getCategoryPosts(slug) {
    const query = {
        query: `query getCategoryPosts {
                    posts(where: {categoryName: "${slug}", orderby: {field: DATE, order: DESC}}, first: 10, after: "null") {
                        pageInfo {
                            endCursor
                            hasNextPage
                            hasPreviousPage
                            startCursor
                        }
                        nodes {
                            id
                            date
                            title
                            slug
                            excerpt(format: RAW)
                            featuredImage {
                                node {
                                    mediaDetails {
                                        file
                                        sizes(include: MEDIUM_LARGE) {
                                            file
                                            sourceUrl
                                            width
                                            height
                                        }
                                    }
                                    mediaItemUrl
                                }
                            }
                        }
                    }
                }`
    };

    const resJson = await graphqlRequest(query);
    const posts = resJson.data.posts;
    return posts;
}


export async function getAllTagSlugs() {
    const query = {
        query: `query getAllTagSlugs {
                    tags(first: 25) {
                        nodes {
                            slug
                        }
                    }
                }`
    };

    const resJson = await graphqlRequest(query);
    console.log(resJson);
    
    const tags = resJson.data.tags.nodes;
    console.log(tags);
    return tags.map((tag) => {
        return {
                slug: tag.slug
        }
    });
}

export async function getTagPosts(slug) {
    const query = {
        query: `query getTagPosts {
                    posts(where: {tag: "${slug}", orderby: {field: DATE, order: DESC}}, first: 10, after: "null") {
                        pageInfo {
                            endCursor
                            hasNextPage
                            hasPreviousPage
                            startCursor
                        }
                        nodes {
                            id
                            date
                            title
                            slug
                            excerpt(format: RAW)
                            featuredImage {
                                node {
                                    mediaDetails {
                                        file
                                        sizes(include: MEDIUM_LARGE) {
                                            file
                                            sourceUrl
                                            width
                                            height
                                        }
                                    }
                                    mediaItemUrl
                                }
                            }
                        }
                    }
                }`
    };

    const resJson = await graphqlRequest(query);
    const posts = resJson.data.posts;
    return posts;
}

export async function getCategoryDetails(slug) {
    const query = {
        query: `query getCategoryDetails {
                    categories(where: {slug: "${slug}"}) {
                        nodes {
                            name
                            slug
                            count
                        }
                    }
                }`
    };

    const resJson = await graphqlRequest(query);
    const categoryDetails = resJson.data.categories.nodes[0];

    return categoryDetails;
}

export async function getTagInfo(slug) {
    const query = {
        query: `query getTagInfo {
                    tags(where: {slug: "${slug}"}) {
                        nodes {
                            name
                            count
                            slug
                        }
                    }
                }`
    };

    const resJson = await graphqlRequest(query);
    const tagDetails = resJson.data.tags.nodes[0];

    console.log('tagDetails:');
    console.log(tagDetails);
    return tagDetails;
}