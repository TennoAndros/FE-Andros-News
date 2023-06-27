import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import Newsletter from "./Newsletter";
const Footer = () => {
  return (
    <footer className="bg-gray-50 bg-gradient-to-r from-sky-500 to-indigo-500 bg-no-repeat bg-left-bottom">
      <Newsletter/>
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <a href="">
              <FaGithub size={20} color="#888888" />
            </a>
            <a href="">
              <FaFacebook size={20} color="#888888" />
            </a>
            <a href="">
              <FaInstagram size={20} color="#888888" />
            </a>
          </div>
          <p className="py-5 text-gray-400">
            {" "}
            Copyright &copy; 2023 All rights reserved
          </p>
          <p className="text-gray-400 text-center">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
