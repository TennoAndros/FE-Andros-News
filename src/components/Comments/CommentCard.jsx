import CommentVoting from "./CommentVoting";
import DeleteComment from "./DeleteComment";
import { useState, useEffect } from "react";

const CommentCard = ({ comment, loggedInUser, setComments, setTotalCount }) => {
  const dateString = comment.created_at;
  const dateTime = new Date(dateString);
  const formattedDate = dateTime.toLocaleDateString("en-GB");
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  useEffect(() => {
    if (loggedInUser === comment.author) setShowDeleteButton(true);
  }, []);

  return (
    <section className="flex flex-col justify-between pt-4 bg-white p-2 rounded shadow-lg">
      <div className="flex gap-5 justify-center items-start">
        <div className="info">
          <div className="mb-2">
            <span className="text-[#0096c7]">{formattedDate}</span>
          </div>
          <div className="body break-all">
            <p className="text-[#48cae4] whitespace-wrap">{comment.body}</p>
          </div>
          <p className="text-[#f48c06] mt-2">{comment.author}</p>
        </div>
      </div>
      <div className="flex flex-row justify-end">
        {!loggedInUser && (
          <div className="text-[#0096c7]">
            Votes: <b className="text-[#f48c06]">{comment.votes}</b>
          </div>
        )}
        {showDeleteButton && loggedInUser && (
          <DeleteComment
            commentId={comment.comment_id}
            setComments={setComments}
            setTotalCount={setTotalCount}
          />
        )}
        {!showDeleteButton && loggedInUser && (
          <CommentVoting
            commentVotes={comment.votes}
            commentId={comment.comment_id}
            loggedInUser={loggedInUser}
          />
        )}
      </div>
    </section>
  );
};

export default CommentCard;
