import Author from "../Author";

const ArticleList = ({ articles }) => {
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center ">Articles</h1>
      {/* grid columns */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {" "}
        {articles.map((article) => (
          <Post key={article.article_id} article={article} />
        ))}
      </div>
    </section>
  );
};

const Post = ({ article }) => {
  const dateString = article.created_at;
  const dateTime = new Date(dateString);
  const formattedDate = dateTime.toLocaleDateString("en-GB");

  return (
    <div className="items truncate">
      <div className="image">
        <img
          src={article.article_img_url}
          alt="Image"
          className="w-[500px] h-[350px] rounded"
        />
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="category h-7">
          <a className="text-orange-600 hover:text-orange-800" href="">
            {article.topic}
          </a>
          <a className="text-gray-800 hover:text-gray-600 " href="">
            -{formattedDate}
          </a>
        </div>
        <div className="title truncate" >
          <a
            href=""
            className="text-xl font-bold text-gray-800 hover:text-blue-600"
          >
            {article.title}
          </a>
        </div>
        <p className="text-gray-500 py-4 truncate">{article.body}</p>
        <Author article={article.author} />
      </div>
    </div>
  );
};

export default ArticleList;
