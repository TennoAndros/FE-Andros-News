import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { getArticles } from "../utils/Api/api";
import Error from "./Error";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [selectedArticleTitle, setSelectedArticleTitle] = useState("");

  const fetchData = async (value) => {
    try {
      const articles = await getArticles();

      const filteredArticles = articles[0].filter((article) =>
        article.title.toLowerCase().includes(value.toLowerCase())
      );

      setResults(filteredArticles);
    } catch (err) {
      setError(err);
    }
  };

  const handleSearchInputChange = (value) => {
    setSearchInput(value);
    fetchData(value);
  };

  const handleResultClick = (title) => {
    setSelectedArticleTitle(title);
    setSearchInput(title);
  };

  if (error) return <Error err={error} />;

  return (
    <form className="my-4 md:my-0">
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <BsSearch className="text-gray-500 dark:text-gray-400" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-[20rem] max-w-[20rem] p-2 pl-8 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:outline-none focus:border-[#f48c06] focus:ring-2 focus:ring-[#f48c06]"
          placeholder="Search Articles..."
          value={searchInput}
          onChange={(event) => handleSearchInputChange(event.target.value)}
        />{" "}
        <Link
          to={`/articles/${
            results.find((result) => result.title === selectedArticleTitle)
              ?.article_id
          }`}
        >
          <button
            type="submit"
            className="text-white absolute right-1.5 bottom-1.5 bg-[#f48c06] hover:bg-[#ffaa00] font-medium rounded-full text-sm px-4 py-1"
          >
            Search
          </button>
        </Link>
      </div>
      {results.length > 0 && searchInput.trim() !== "" && (
        <div className="result-list max-w-[40rem] bg-white flex flex-col shadow-lg max-h-6 overflow-y-scroll rounded-lg cursor-pointer outline outline-[#f48c06]">
          {results.map((result) => (
            <div
              key={result.article_id}
              className="hover:bg-[#f48c06] max-w-4"
              onClick={() => handleResultClick(result.title)}
            >
              {result.title}
            </div>
          ))}
        </div>
      )}
    </form>
  );
};

export default SearchBar;
