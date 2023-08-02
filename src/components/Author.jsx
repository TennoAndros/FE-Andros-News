const Author = ({ author,userImg }) => {
  return (
    <div className="author flex py-5">
      <img
        className="rounded-full w-[60px] h-[60px]"
        src={userImg}
        alt="Author Image"
      />
      <div className="flex flex-col justify-center px-4">
        <span className="text-md font-bold text-[#f48c06]">
          {author}
        </span>
      </div>
    </div>
  );
};

export default Author;
