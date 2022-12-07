async function graphqlRequest(query) {
    const url = 'https://wp.codingreflections.com/graphql';
    const headers = { 'Content-Type': 'application/json' };

    if(process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
      headers[
        'Authorization'
      ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
    }

    console.log(headers);

    const res = await fetch(url, {
        headers,
        method: 'POST',
        body: JSON.stringify(query)
    });

    const resJson = await res.json();
    return resJson;
}

export async function getAllPostSlugs() {
    const query = {
        query: `query allPostSlugs {
            posts(where: {orderby: {field: DATE, order: DESC}}) {
              nodes {
                slug
              }
            }
          }`
    };

    const resJson = await graphqlRequest(query);
    console.log('resJson...');
    console.log(resJson);
    const slugs = resJson.data.posts.nodes.map((node) => {
        return {
            params: {
                slug: node.slug
            }
        }
    });

    return slugs;

}

export async function getAllWpPosts() {
    const query =  {
        query: `query allWpPosts {
        posts(where: {orderby: {field: DATE, order: DESC}}, first: 6, after: "null") {
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
            categories {
              nodes {
                name
                slug
              }
            }
            tags {
              nodes {
                name
                slug
              }
            }
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
    const allWpPosts = resJson.data.posts;

    return allWpPosts;

}

export async function getMorePosts(endCursor) {
  const query =  {
    query: `query morePosts {
    posts(where: {orderby: {field: DATE, order: DESC}}, first: 6, after: "${endCursor}") {
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
        categories {
          nodes {
            name
            slug
          }
        }
        tags {
          nodes {
            name
            slug
          }
        }
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
const morePosts = resJson.data.posts;

return morePosts;
}

export async function getSinglePostData(slug) {
    const query = {
        query: `query singlePostData {
            postBy(slug: "${slug}") {
              date
              modified
              title
              content
              excerpt(format: RAW)
              featuredImage {
                node {
                  mediaDetails {
                    file
                    sizes {
                      file
                    }
                  }
                }
              }
            }
          }`
    };
    const resJson = await graphqlRequest(query);
    console.log('resJson...');
    console.log(resJson);
    const singlePost = resJson.data.postBy;

    return singlePost;

}