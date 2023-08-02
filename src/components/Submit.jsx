import { useState, useEffect } from "react";
import { getTopics, postArticle, postTopic } from "../utils/Api/api";
import Error from "./Error";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const Submit = ({ loggedInUser }) => {
  const [topics, setTopics] = useState([]);
  const [showNewTopicInputs, setShowNewTopicInputs] = useState(false);
  const [postNewTopic, setPostNewTopic] = useState({
    slug: "",
    description: "",
  });
  const [postNewArticle, setPostNewArticle] = useState({
    author: loggedInUser,
    title: "",
    body: "",
    topic: "",
    article_img_url: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  loggedInUser && buttonDisabled && setButtonDisabled(false);

  const fetchTopics = async () => {
    try {
      const data = await getTopics();
      setTopics(data);
    } catch (err) {
      setError(err);
    }
  };
  useEffect(() => {
    fetchTopics();
    if (!loggedInUser) {
      setShowLoginPopup(true);
    }
  }, []);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      setIsLoading(true);
      const existingTopic = topics.find(
        (topic) => topic.slug === postNewArticle.topic
      );
      if (existingTopic) {
       await postArticle(postNewArticle);
        setSuccessMessage("Article created");
        navigate(`/articles`);
      } else {
        setShowNewTopicInputs(true);
        await postTopic(postNewTopic);
        await postArticle({ ...postNewArticle, topic: postNewTopic.slug });
        setSuccessMessage("Article created");
      }
    } catch (err) {
      setError(err);
    }
  };

  if (error) return <Error err={error} />;

  return (
    <div className="flex flex-col items-center space-y-4 mt-[4.5rem] bg-white rounded shadow-2xl p-14 mx-auto max-w-[36rem]">
      {showLoginPopup && !loggedInUser && (
        <Popup
          open={true}
          onClose={() => setShowLoginPopup(false)}
          position="center"
        >
          <div className="p-10 bg-gray-200 rounded shadow-2xl text-center">
            <h1 className="text-2xl text-[#0096c7] mb-4">
              Please log in to continue.
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

      {!successMessage && (
        <>
          <h1 className="font-bold text-2xl text-[#f48c06] mb-4">
            Post new Article
          </h1>
          <input
            disabled
            type="text"
            placeholder="Author"
            value={loggedInUser}
            onChange={(event) =>
              setPostNewArticle({
                ...postNewArticle,
                author: event.target.value,
              })
            }
            aria-label="Article author"
            className="p-2 border-4 border-[#48cae4] rounded outline-none outline-2 focus:border-[#0096c7] disabled:opacity-60 disabled:bg-gray-300 md:max-w-[300px]"
          />
          <input
            type="text"
            placeholder="Title"
            value={postNewArticle.title}
            onChange={(event) =>
              setPostNewArticle({
                ...postNewArticle,
                title: event.target.value,
              })
            }
            aria-label="Article title"
            className="p-2 border-4 border-[#48cae4] rounded outline-none focus:outline-2 focus:border-[#0096c7] md:max-w-[300px]"
          />
          <textarea
            rows="4"
            type="text"
            placeholder="Body"
            value={postNewArticle.body}
            onChange={(event) =>
              setPostNewArticle({
                ...postNewArticle,
                body: event.target.value,
              })
            }
            aria-label="Article body"
            className="p-2 border-4 border-[#48cae4] rounded outline-none focus:outline-2 focus:border-[#0096c7] md:max-w-[300px]"
          />
          <input
            type="text"
            placeholder="Topic"
            value={postNewArticle.topic}
            onChange={(event) =>
              setPostNewArticle({
                ...postNewArticle,
                topic: event.target.value,
              })
            }
            aria-label="Article topic"
            className="p-2 border-4 border-[#48cae4] rounded outline-none focus:outline-2 focus:border-[#0096c7] md:max-w-[300px]"
          />
          <input
            type="text"
            placeholder="Article img URL"
            value={postNewArticle.article_img_url}
            onChange={(event) =>
              setPostNewArticle({
                ...postNewArticle,
                article_img_url: event.target.value,
              })
            }
            aria-label="Article img URL"
            className="p-2 border-4 border-[#48cae4] rounded outline-none focus:outline-2 focus:border-[#0096c7] md:max-w-[300px]"
          />
          {showNewTopicInputs && (
            <>
              <h1 className="font-bold text-2xl text-[#f48c06] mb-4">
                Post new Topic
              </h1>
              <input
                type="text"
                placeholder="New Topic Slug"
                value={postNewTopic.slug}
                onChange={(event) =>
                  setPostNewTopic({
                    ...postNewTopic,
                    slug: event.target.value,
                  })
                }
                aria-label="New Topic Slug"
                className="p-2 border-4 border-[#48cae4] rounded outline-none focus:outline-2 focus:border-[#0096c7] md:max-w-[300px]"
              />
              <input
                type="text"
                placeholder="New Topic Description"
                value={postNewTopic.description}
                onChange={(event) =>
                  setPostNewTopic({
                    ...postNewTopic,
                    description: event.target.value,
                  })
                }
                aria-label="New Topic Description"
                className="p-2 border-4 border-[#48cae4] rounded outline-none focus:outline-2 focus:border-[#0096c7] md:max-w-[300px]"
              />
              {isLoading ? (
                <Loading />
              ) : (
                <button
                  onClick={handleSubmit}
                  className="bg-[#f48c06] hover:bg-[#ffaa00] text-white font-bold py-2 px-4 rounded-full"
                >
                  Create new article
                </button>
              )}
            </>
          )}
          {!showNewTopicInputs &&
            (isLoading ? (
              <Loading />
            ) : (
              <button
                onClick={handleSubmit}
                disabled={buttonDisabled}
                className="bg-[#f48c06] hover:bg-[#ffaa00] text-white font-bold py-2 px-4 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Create new article
              </button>
            ))}
          {successMessage && (
            <div className="bg-white p-14 rounded shadow-2xl">
              <h1 className="text-2xl text-[#0096c7] mb-4 text-center">
                {successMessage}
              </h1>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Submit;
