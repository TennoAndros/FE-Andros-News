import { useState } from "react";
import { postCommentByArticleId } from "../../utils/Api/api";
import Error from "../Error";
import Loading from "../Loading";

const SubmitComment = ({
  loggedInUser,
  articleId,
  setComments,
  setShowSubmitComment,
}) => {
  const [postNewComment, setPostNewComment] = useState({
    author: loggedInUser,
    body: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const newComment = await postCommentByArticleId(
        articleId,
        postNewComment
      );
      console.log(newComment);
      setSuccessMessage("Comment Added");
      setComments((currComments) => [...currComments, newComment]);
      setIsLoading(false);
      setShowSubmitComment(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  if (error) return <Error err={error} />;

  return (
    <div className="flex flex-col items-center space-y-4 mt-[3.0rem] bg-white rounded shadow-2xl p-6 mx-auto lg:w-[30rem]">
      <h1 className="font-bold text-2xl text-[#f48c06] mb-4">
        Post new Comment
      </h1>
      <div className="w-full">
        <input
          disabled
          type="text"
          placeholder="User"
          value={loggedInUser}
          onChange={(event) =>
            setPostNewComment({
              ...postNewComment,
              author: event.target.value,
            })
          }
          aria-label="Comment author"
          className="w-full p-2 border-4 border-[#48cae4] rounded outline-none outline-2 focus:border-[#0096c7] disabled:opacity-60 disabled:bg-gray-300"
        />
      </div>
      <div className="w-full">
        <textarea
          type="text"
          placeholder="Comment..."
          value={postNewComment.body}
          onChange={(event) =>
            setPostNewComment({
              ...postNewComment,
              body: event.target.value,
            })
          }
          aria-label="New Comment"
          className="block w-full p-2 border-4 border-[#48cae4] rounded outline-none focus:outline-2 focus:border-[#0096c7]"
        />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <button
          onClick={handleSubmit}
          className="bg-[#f48c06] hover:bg-[#ffaa00] text-white font-bold py-2 px-4 rounded-full"
        >
          Comment
        </button>
      )}
      {successMessage && (
        <p className="text-green-500 font-bold">{successMessage}</p>
      )}
    </div>
  );
};

export default SubmitComment;
