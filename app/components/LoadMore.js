"use client";

import { getMorePosts } from "../lib/posts";
import { useCallback } from "react";

export default function LoadMore({ posts, onPostsChange, taxonomy = null, buttonText, active }) {

    const handleOnclick = async (event) => {
        let clickedBtn = event.target;
            clickedBtn.innerHTML = 'Loading more posts...';
            clickedBtn.disabled = true;
            let newPosts = {
              pageInfo: {

              },
              nodes: []
            };
            const morePosts = await getMorePosts(posts.pageInfo.endCursor, taxonomy);
            newPosts.pageInfo = morePosts.pageInfo;
            posts.nodes.map((node) => {
              newPosts.nodes.push(node);
            });
            morePosts.nodes.map((node) => {
              newPosts.nodes.push(node);
            });
            onPostsChange(newPosts);

            if(morePosts.pageInfo.hasNextPage) {
              clickedBtn.disabled = false;
              clickedBtn.innerHTML = 'Load more posts';
            }
            else {
              clickedBtn.disabled = true;
              clickedBtn.innerHTML = 'No more posts to load';
            }

    };

    return (
        <button 
        className="load-more font-bold block mx-auto px-4 py-2 rounded text-brand-dark bg-brand-skyblue disabled:opacity-75"
        onClick={handleOnclick} 
        disabled={posts.pageInfo.hasNextPage ? false : true}
        >
            {posts.pageInfo.hasNextPage ? 'Load more posts' : 'No more posts to load'}
        </button>
    );
}