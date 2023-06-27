import Author from "./Author";

const Topics = () => {
  return (
    <section className="container mx-auto md:px-20 py-16 ">
      <a href="" className="block font-bold text-4xl pb-12 text-center">
        TOPICS
      </a>
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="font-bold text-3xl py-12 text-center">Popular</h1>
          <div className="flex flex-col gap-6">
            {/* post */}
            {Post()}
            {Post()}
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-3xl py-12 text-center">Recent</h1>
          <div className="flex flex-col gap-6">
            {Post()}
            {Post()}
          </div>
        </div>
      </div>
    </section>
  );
};
const Post = () => {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <img
          src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg"
          alt="Image"
          className="w-[300px] h-[250px] rounded"
        />
      </div>
      <div className="info flex justify-center flex-col">
        <div className="category">
          <a className="text-orange-600 hover:text-orange-800 " href="">
            Business,Travel
          </a>
          <a className="text-gray-800 hover:text-gray-600 " href="">
            July 3,2022
          </a>
        </div>
        <div className="title">
          <a
            href=""
            className="text-xl font-bold text-gray-800 hover:text-blue-600"
          >
            Lorem ipsum dolor sit amet.
          </a>
        </div>
        <Author />
      </div>
    </div>
  );
};

export default Topics;
