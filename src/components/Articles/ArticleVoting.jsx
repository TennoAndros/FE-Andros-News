import { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { patchVotesByArticleById } from "../../utils/Api/api";
import Error from "../Error";

const ArticleVoting = ({ article }) => {
  const [voted, setVoted] = useState(0);
  const [updatedVotes, setUpdatedVotes] = useState(article.votes);
  const [error, setError] = useState("");

  const handleVoting = async (vote) => {
    try {
      setVoted((curVotes) => {
        return curVotes + vote;
      });
      await patchVotesByArticleById(article.article_id, { votes: vote });
      setUpdatedVotes((curVotes) => {
        return curVotes + vote;
      });
    } catch (err) {
      setError(err);
      setVoted(0);
    }
  };

  if (error) return <Error err={error} />;

  return (
    <div>
      <div className="flex justify-center items-center mt-10">
        <button
          disabled={voted === 1}
          className="text-green-500 mr-2 disabled:opacity-50"
          onClick={() => {
            handleVoting(1);
          }}
        >
          <FaThumbsUp />
        </button>
        <span className="mr-2">{updatedVotes}</span>
        <button
          disabled={voted === -1}
          className="text-red-500 disabled:opacity-50"
          onClick={() => {
            handleVoting(-1);
          }}
        >
          <FaThumbsDown />
        </button>
      </div>
    </div>
  );
};

export default ArticleVoting;
