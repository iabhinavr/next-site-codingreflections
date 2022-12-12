import graphqlRequest from "./graphqlRequest";

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

export async function getMorePosts(endCursor, taxonomy) {

  let condition = `where: {orderby: {field: DATE, order: DESC}}, first: 6, after: "${endCursor}"`;

  if(taxonomy) {
    condition = `where: {orderby: {field: DATE, order: DESC}, ${taxonomy.key}: "${taxonomy.value}"}, first: 6, after: "${endCursor}"`;
  }
  const query =  {
    query: `query morePosts {
    posts(${condition}) {
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