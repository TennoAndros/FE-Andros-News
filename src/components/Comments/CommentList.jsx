import { useState, useEffect } from "react";
import { getCommentsByArticleId } from "../../utils/Api/api";
import Error from "../Error";
import CommentCard from "./CommentCard";
import SubmitComment from "./SubmitComment";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";

const CommentList = ({ articleId, loggedInUser }) => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");
  const [limit, setLimit] = useState(6);
  const [totalCount, setTotalCount] = useState(0);
  const [showSubmitComment, setShowSubmitComment] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  loggedInUser && buttonDisabled && setButtonDisabled(false);

  const fetchComments = async () => {
    try {
      const data = await getCommentsByArticleId(articleId, limit);
      setComments(data[0]);
      setTotalCount(data[1]);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [articleId, limit]);

  if (error) return <Error err={error} />;

  const loadMoreComments = () => {
    setLimit((curLimit) => curLimit + 6);
  };

  const handleAddCommentClick = () => {
    if (!loggedInUser) {
      setShowSubmitComment(false);
      setShowLoginPopup(true);
    } else {
      setShowSubmitComment(true);
      setButtonDisabled(false);
      setShowLoginPopup(false);
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <section className="container mx-auto md:px-4 py-2">
      <h1 className="font-bold text-4xl py-12 text-center text-[#0096c7] cursor-pointer">
        Comments
      </h1>
      <div className="flex flex-col justify-between items-center mb-4 md:flex-row">
        <div className="text-[#ffaa00]">Total Comments: {totalCount}</div>
        <button
          onClick={handleAddCommentClick}
          className="mb-2 md:mb-0 md:mr-2 bg-[#f48c06] hover:bg-[#ffaa00] text-white py-1 px-2 rounded-md whitespace-nowrap"
        >
          Post Comment
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {comments.map((comment) => {
          return (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
              loggedInUser={loggedInUser}
              setComments={setComments}
              setTotalCount={setTotalCount}
            />
          );
        })}
      </div>
      <div className="flex justify-center mt-10">
        <button
          className="bg-[#f48c06] hover:bg-[#ffaa00] text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={loadMoreComments}
          disabled={totalCount === comments.length}
        >
          View More
        </button>
      </div>
      {showSubmitComment && loggedInUser && (
        <div>
          <SubmitComment
            loggedInUser={loggedInUser}
            articleId={articleId}
            setComments={setComments}
            setShowSubmitComment={setShowSubmitComment}
          />
        </div>
      )}
      {showLoginPopup && !loggedInUser && (
        <Popup
          open={true}
          onClose={() => setShowLoginPopup(false)}
          position="center"
        >
          <div className="p-10 bg-gray-200 rounded shadow-2xl text-center">
            <h1 className="text-2xl text-[#0096c7] mb-4">
              Please log in to post a comment.
            </h1>
            <button className="bg-[#f48c06] hover:bg-[#ffaa00] text-white font-bold py-2 px-4 mt-4 rounded-full outline-none disabled:opacity-50 disabled:cursor-not-allowed">
              <Link to="/login" className="text-white text-center">
                <h1 className="text-2xl">
                  <b>Log in</b>
                </h1>
              </Link>
            </button>
          </div>
        </Popup>
      )}
    </section>
  );
};

export default CommentList;
