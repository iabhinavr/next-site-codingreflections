import graphqlRequest from "./graphqlRequest";

export async function getAllPageSlugs() {

    let pages = {
        "0": "about",
        "1": "terms-conditions",
        "2": "privacy-policy",
        "3": "disclosure",
        "4": "disclaimer"
    };

    let slugs = [];

    for (let ID in pages) {
        slugs.push({
            params: {
            slug: `${pages[ID]}`
            }
        });
    }

    return slugs;
    

}

export async function getPage(slug) {
    const query = {
        query: `query getPage {
            pages(where: {name: "${slug}", status: PUBLISH}) {
              nodes {
                content
                modified
                slug
                title
              }
            }
          }`
    };

    const resJson = await graphqlRequest(query);
    console.log(resJson);
    const page = resJson.data.pages.nodes[0];
    console.log(page);

    return page;
}