import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import Newsletter from "./Newsletter";
import { Link } from "react-router-dom";

const Footer = () => {
  // bg-gradient-to-r from-sky-500 to-indigo-500 bg-no-repeat bg-left-bottom
  return (
    <footer className="bg-[#48cae4] ">
      <Newsletter />
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-2">
          <div className="flex gap-6 justify-center pb-3">
            <Link to="https://github.com/TennoAndros">
              <FaGithub size={25} color="#f48c06" />
            </Link>
            <Link to="https://www.facebook.com">
              <FaFacebook size={25} color="#f48c06" />
            </Link>
            <Link to="https://www.instagram.com/">
              <FaInstagram size={25} color="#f48c06" />
            </Link>
          </div>
          <p className="py-5 text-gray-200">
            {" "}
            Copyright &copy; 2023 All rights reserved
          </p>
          <p className="text-gray-200 text-center">Created by: Tenno Andros</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
