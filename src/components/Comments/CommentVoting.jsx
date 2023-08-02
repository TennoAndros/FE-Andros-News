import { BiUpvote, BiDownvote } from "react-icons/bi";
import { useState } from "react";
import { patchVotesCommentById } from "../../utils/Api/api";

const CommentVoting = ({ commentVotes, commentId }) => {
  const [voted, setVoted] = useState(0);
  const [updatedVotes, setUpdatedVotes] = useState(commentVotes);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleVoting = async (vote) => {
    try {
      setVoted((curVotes) => {
        return curVotes + vote;
      });
      setErrorMessage(false);
      await patchVotesCommentById(commentId, { votes: vote });
      setUpdatedVotes((curVotes) => {
        return curVotes + vote;
      });
    } catch (err) {
      setVoted(0);
      setErrorMessage(true);
    }
  };

  return (
    <div className="flex justify-start items-start">
      <div className="flex items-center">
        <button
          disabled={voted === 1}
          className="text-green-500 mr-2 disabled:opacity-50"
          onClick={() => {
            handleVoting(1);
          }}
        >
          <BiUpvote size={18} />
        </button>
        <span className="text-base mr-2">{updatedVotes}</span>
        <button
          disabled={voted === -1}
          className="text-red-500 disabled:opacity-50"
          onClick={() => {
            handleVoting(-1);
          }}
        >
          <BiDownvote size={18} />
        </button>
      </div>
      {errorMessage && (
        <div className="flex flex-col items-start text-l">
          Something went wrong. Please try again later.
        </div>
      )}
    </div>
  );
};

export default CommentVoting;
