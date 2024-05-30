import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const fullArticleElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const fullArticle = fullArticleElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    fullArticleElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, fullArticle, tags);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User Id here
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Your User Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Blog Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="provide title for your blog post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Blog Content(short)
        </label>
        <input
          type="text"
          ref={postBodyElement}postBodyElement
          rows="4"
          className="form-control"
          id="fullArticle"
          placeholder="write breifly about your blog post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="fullArticle" className="form-label">
          Write in depth article
        </label>
        <textarea
          type="text"
          ref={fullArticleElement}
          className="form-control"
          id="body"
          placeholder="Tell us more about it shortly"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          ref={tagsElement}
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
