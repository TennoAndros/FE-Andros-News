
import Logo from "../assets/newspaper.png";
const Header = () => {
  return (
    <header className="bg-gray-50">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="flex items-center justify-start sm:justify-center  md:w-96 sm:w-auto order-1 sm:order-1 sm:py-0">
          <img
            className="object-fit:contain h-12 mr-2"
            src={Logo}
            alt="Logo Image"
          />
          <h1 className="font-bold uppercase sm:text-3xl text-3xl ">
            Muggle News
          </h1>
        </div>
        <div className="md:flex-none w-96 order-2 sm:order-2 flex justify-center py-4 sm:py-0">
          <input
            type="text"
            className="input-text"
            placeholder="Search..."
            aria-label="Search"
          />
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6">
           
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
