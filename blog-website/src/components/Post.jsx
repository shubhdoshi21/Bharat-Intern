import { useContext, useState } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleReadMore = (post) => {
    setSelectedPost(post);
  };

  const handleClose = () => {
    setSelectedPost(null);
  };

  return (
    <>
      <div className="card m-3 p-2 text-center" style={{ width: "400px" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(post.id)}
            >
              <RiDeleteBinFill />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="badge text-bg-primary m-1"
              style={{ float: "left" }}
            >
              #{tag}
            </span>
          ))}
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleReadMore(post)}
        >
          Read More
        </button>
      </div>

      {selectedPost && (
        <div className="modal d-block" tabIndex="-1" role="dialog">
          <div className="modal-backdrop show z-n1"></div>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">{selectedPost.title}</h4>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleClose}
                ></button>
              </div>
              <h6 className="text-secondary text-end px-4 pt-4 fw-lighter">
                {selectedPost.date}
              </h6>
              <div className="modal-body ">
                <p>{selectedPost.fullArticle}</p>
              </div>
              <div className="modal-footer">
                <div>
                  {selectedPost.tags.map((tag) => (
                    <span key={tag} className="badge text-bg-primary m-1">
                      #{tag}
                    </span>
                  ))}
                </div>
                {/* <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                >
                  Close
                </button> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Post;
