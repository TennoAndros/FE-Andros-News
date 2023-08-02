import Logo from "../assets/newspaper.png";
import { Link } from "react-router-dom";
import HeaderOptions from "./HeaderOptions";
import SearchBar from "./SearchBar";

const Header = ({ loggedInUser }) => {
  return (
    <header className="bg-[#48cae4]">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <Link to="/">
          <div className="flex items-center justify-start sm:justify-center md:w-96 sm:w-auto order-1 sm:order-1 sm:py-0">
            <img
              className="object-fit:contain h-12 mr-2 bg-white rounded-lg"
              src={Logo}
              alt="Logo Image"
            />

            <h1 className="font-bold uppercase sm:text-3xl text-3xl text-white">
              Muggle News
            </h1>
          </div>
        </Link>
        <div>
          <SearchBar />
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-1">
            {loggedInUser ? (
              <Link to="/login">
                <button className="bg-[#f48c06] hover:bg-[#ffaa00] text-white font-bold py-2 px-4 rounded-full whitespace-nowrap">
                  {loggedInUser}
                </button>
              </Link>
            ) : (
              <HeaderOptions />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
