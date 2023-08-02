import { useState } from "react";
import { deleteCommentById } from "../../utils/Api/api";
import Loading from "../Loading";
import Error from "../Error";
import { MdDeleteForever } from "react-icons/md";
3;

const DeleteComment = ({ commentId, setComments, setTotalCount }) => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const deleteComment = async () => {
    try {
      setIsLoading(true);
      await deleteCommentById(commentId);
      setComments((currComments) => {
        return currComments.filter((comment) => {
          return comment.comment_id !== commentId;
        });
      });
      setTotalCount((currCount) => --currCount);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  if (error) return <Error err={error} />;

  if (isLoading) return <Loading />;

  return (
    <div className="flex justify-end items-end">
      <button onClick={deleteComment} aria-label="Delete Comment">
        <MdDeleteForever size={20} className="text-red-600" />
      </button>
    </div>
  );
};

export default DeleteComment;
