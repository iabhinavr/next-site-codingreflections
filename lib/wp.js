async function graphqlRequest(query) {
    const url = 'http://wordpress.local/graphql';
    const headers = { 'Content-Type': 'application/json' };

    if(process.env.WP_LOCAL_AUTH_REFRESH_TOKEN) {
      headers[
        'Authorization'
      ] = `Bearer ${process.env.WP_LOCAL_AUTH_REFRESH_TOKEN}`;
    }

    const res = await fetch(url, {
        headers,
        method: 'POST',
        body: JSON.stringify(query)
    });

    const resJson = await res.json();
    return resJson;
}

export async function getAllPostSlugs() {

    try {
      let res = await fetch('http://wordpress.local/wp-content/plugins/frontend-notifier/data/slug_list.json');
      let resJson = await res.json();

      let posts = resJson.posts;

      let slugs = [];

      for (let ID in posts) {
        slugs.push({
          params: {
            slug: `${posts[ID]}`
          }
        });
      }

      return slugs;
    }
    catch (err) {
      console.log(err);
    }
    

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
    const singlePost = resJson.data.postBy;

    return singlePost;

}