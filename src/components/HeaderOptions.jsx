import { Link, useLocation } from "react-router-dom";

const HeaderOptions = () => {
  const location = useLocation();

  if (location.pathname === "/signup") {
    return (
      <div className="flex flex-col items-center space-y-4 lg:flex-row lg:justify-between lg:items-center lg:space-y-0 lg:space-x-4">
        <span className="font-bold text-white">Already have an account?</span>
        <Link to="/login">
          <button className="bg-[#f48c06] hover:bg-[#ffaa00] text-white font-bold py-2 px-4 rounded-full whitespace-nowrap">
            Log In
          </button>
        </Link>
      </div>
    );
  } else if (location.pathname === "/login") {
    return (
      <div className="flex flex-col items-center space-y-4 lg:flex-row lg:justify-between lg:items-center lg:space-y-0 lg:space-x-4">
        <span className="font-bold text-white">
          Don&apos;t have an account?
        </span>
        <Link to="/signup">
          <button className="bg-[#f48c06] hover:bg-[#ffaa00] text-white font-bold py-2 px-4 rounded-full whitespace-nowrap lg:mr-8">
            Sign Up
          </button>
        </Link>
      </div>
    );
  }

  return (
    <section>
      <div className="flex flex-col items-center space-y-4 lg:flex-row lg:justify-between lg:items-center lg:space-y-0 lg:space-x-4">
        <Link to="/signup">
          <button className="bg-[#f48c06] hover:bg-[#ffaa00] text-white font-bold py-2 px-4 rounded-full whitespace-nowrap lg:mr-8">
            Sign Up
          </button>
        </Link>

        <span className="font-bold text-white">Already have an account?</span>
        <Link to="/login">
          <button className="bg-[#f48c06] hover:bg-[#ffaa00] text-white font-bold py-2 px-4 rounded-full whitespace-nowrap">
            Log In
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeaderOptions;
