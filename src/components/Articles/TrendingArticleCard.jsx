/* eslint-disable react/prop-types */
import Author from "../Author";


const TrendingArticleCard = ({ article }) => {
    const dateString = article.created_at;
    const dateTime = new Date(dateString);
    const formattedDate = dateTime.toLocaleDateString("en-GB");
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        {/* <Link href="/"><a href=""><img src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg" alt="Image" className="w-[600px] h-[600px]" />
   </a></Link> */}
        <img
          src={article.article_img_url}
          alt="Image"
          className="w-[600px] h-[600px] rounded"
        />
      </div>
      <div className="info flex justify-center flex-col">
        <div className="category">
          <a className="text-orange-600 hover:text-orange-800 " href="">
            {article.topic}
          </a>
          <a className="text-gray-800 hover:text-gray-600 " href="">
            -{formattedDate}
          </a>
        </div>
        <div className="title">
          <a
            href=""
            className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-blue-600"
          >
            {article.title}
          </a>
        </div>
        <p className="text-gray-500 py-4">
         {article.body}
        </p>
        <Author article={article.author}/>
      </div>
    </div>
  );
};
export default TrendingArticleCard;
