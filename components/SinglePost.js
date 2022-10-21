import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import BookmarkAction from "../functions/Bookmark";
function SinglePost(props) {
  const post = props.location.state.posts;
  const feedTitle = props.location.state.feedtitle;
  return (
    <div className="single_post">
      {/* <BookmarkAction id={post.id} reading={post}/> */}
      <div className="back_button">
        <span>
          <Link to="" onClick={() => history.back()}>
            <button>
              <i className="arrow left"></i> back to {feedTitle ? feedTitle : 'feeds'}
            </button>
          </Link>
        </span>
      </div>
      <h1>{post.title.__cdata}</h1>
      <div className="post_subheader">
        <p>{post.pubDate}</p>
      </div>
      {post.encoded ? (
        <div
          className="blog_content"
          dangerouslySetInnerHTML={{ __html: post.encoded.__cdata }}
        ></div>
      ) : (
        <div>in</div>
      )}
    </div>
  );
}

export default SinglePost;
