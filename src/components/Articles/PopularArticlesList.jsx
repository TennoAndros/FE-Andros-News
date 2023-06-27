import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import PopularArticleCard from "./PopularArticleCard";

const PopularArticlesList = ({ articles }) => {
  // edit when articles have more votes to give most voted  && articles.created_at> than a week or month
  const popularArticles = articles.filter((article) => article.votes >= 0);

  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center ">Most Popular</h1>
      <Swiper
        modules={[Autoplay, Pagination]}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 30 },
        }}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{
          clickable: true,
        }}
      >
        {popularArticles.slice(0, 4).map((article) => (
          <SwiperSlide key={article.article_id}>
            <PopularArticleCard article={article} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PopularArticlesList;
