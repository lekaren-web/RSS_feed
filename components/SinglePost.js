import React, {useEffect} from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import BookmarkAction from "../functions/Bookmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter
} from "@fortawesome/free-solid-svg-icons";
function SinglePost(props) {
  // useEffect(() => {
  // }, [])
  const post = props.location.state.posts;
  const feedTitle = props.location.state.feedtitle;
  return (
    <div className="single_post ">
      {/* <BookmarkAction id={post.id} reading={post}/> */}
      <div className="single-post-buttons" >
      <div className="single-back_button">
        <span>
          <Link to="" onClick={() => history.back()}>
            <button>
              <i className="arrow left"></i> back to {feedTitle ? feedTitle : 'feeds'}
            </button>
          </Link>
        </span>
      </div>
      {/* <div className="downloadPdf">
        <span>
        <button onClick={() => {window.print()}}>Download Article</button>
        </span>
      </div> */}
    </div>

      <div className="blog_pdf myDivToPrint">
      <h1>{post.title}</h1>
      <div className="post_subheader">
        <p>{post.pubDate}</p>
      </div>
      {post.content_encoded ? (
        <div
          className="blog_content"
          dangerouslySetInnerHTML={{ __html: post.content_encoded }}
        ></div>
      ) : (
        <div
          className="blog_content"
          dangerouslySetInnerHTML={{ __html: post.description}}
        >
        </div>
      )}
      </div>
      <div className="socialMedias">
      <FontAwesomeIcon icon={faFacebook} />
      {/* <FontAwesomeIcon icon={faTwitter} /> */}
      </div>
    </div>
  );
}

export default SinglePost;
