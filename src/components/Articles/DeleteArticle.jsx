import { useState } from "react";
import { deleteArticleById } from "../../utils/Api/api";
import Loading from "../Loading";
import Error from "../Error";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const DeleteArticle = ({ articleId }) => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const deleteComment = async () => {
    try {
      setIsLoading(true);
      await deleteArticleById(articleId);
      navigate("/");
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  if (error) return <Error err={error} />;

  if (isLoading) return <Loading />;

  return (
    <div className="flex">
      <h4 className="flex text-[#0096c7]">
        Delete Article:
        <button onClick={deleteComment} aria-label="Delete Comment">
          <MdDeleteForever size={25} className="text-red-600" />
        </button>
      </h4>
    </div>
  );
};

export default DeleteArticle;
