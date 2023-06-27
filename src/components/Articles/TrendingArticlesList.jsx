/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import TrendingArticleCard from "./TrendingArticleCard";


const TrendingArticlesList = ({ articles }) => {
  // edit when articles have more votes to give most voted  && articles.created_at> than a week or month
  const trendingArticles = articles.filter((article) => article.votes >= 0);

  return (
    <section className="py-16">
      <div className="bg-[url(https://images.unsplash.com/photo-1683002668970-1a63fc4c55ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80)] bg-no-repeat bg-right"></div>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          fadeEffect={{
            crossFade: true,
          }}
          pagination={{
            clickable: true,
          }}
          effect={"fade"}
          crossFade={true}
        >
          {trendingArticles.slice(0, 3).map((article) => (
            <SwiperSlide key={article.article_id}>
              <TrendingArticleCard article={article} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TrendingArticlesList;
