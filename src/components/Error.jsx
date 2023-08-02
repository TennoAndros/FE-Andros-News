import { Link } from "react-router-dom";

const Error = ({
  err: {
    response: { status, data },
  },
}) => {
  return (
    <div className="container mx-auto md:px-20 py-20 bg-white shadow-lg text-center text-xl mt-20">
      <h1>
        {status} {data.msg}
      </h1>
      <h2>No Worries. Go Back and try again</h2>
      <Link to="/"> <button className="bg-[#f48c06] hover:bg-[#ffaa00] text-white px-4 py-2 rounded mt-4">Home</button> </Link>
    </div>
  );
};

export default Error;
