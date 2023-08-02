import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import PopularArticleCard from "./PopularArticleCard";
import { useState, useEffect } from "react";
import { getArticles, getUsers } from "../../utils/Api/api";
import Error from "../Error";
import Loading from "../Loading";

const PopularArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const [articlesData, usersData] = await Promise.all([
        getArticles("votes", "desc", "", 3),
        getUsers(),
      ]);
      setArticles(articlesData[0]);
      setUsers(usersData);
      setIsLoading(false);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) return <Error err={error} />;

  if (isLoading) return <Loading />;

  return (
    <section className="bg-white py-16">
      <div className="bg-[url(https://images.unsplash.com/photo-1683002668970-1a63fc4c55ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80)] bg-no-repeat bg-right"></div>
      <div className="container mx-auto md:px-20 text-[#0096c7]">
        <h1 className="font-bold text-4xl  pb-12 text-center">Popular</h1>
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          fadeEffect={{
            crossFade: true,
          }}
          effect={"fade"}
        >
          {articles.map((article) => {
            const userArr = users.find(
              (user) => user.username === article.author
            );
            return (
              <SwiperSlide key={article.article_id}>
                <PopularArticleCard
                  article={article}
                  userImg={userArr.avatar_url}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularArticlesList;
