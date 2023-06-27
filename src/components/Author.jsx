const Author = ({ article }) => {
  return (
    <div className="author flex py-5">
      <img
        className="rounded-full w-[60px] h-[60px]"
        src="https://blog.hootsuite.com/wp-content/uploads/2020/02/Image-copyright-556x556.png.webp"
        alt="imageP"
      />
      <div className="flex flex-col justify-center px-4">
        <link rel="/" href="" />
        <a
          className="text-md font-bold text-gray-800 hover:text-gray-600"
          href=""
        >
         {article}
        </a>
      </div>
    </div>
  );
};

export default Author;
