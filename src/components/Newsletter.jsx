import { useState } from "react";

const Newsletter = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleSubscribeClick = () => {
    setMessage("This Option is Under Maintenance");
    setEmail("");

    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <section className="bg-[#48cae4] mt-20">
      <div className="container:none mx-auto md:px-20 py-12 text-center">
        <h1 className="font-bold text-3xl text-white">Subscribe Newsletter</h1>
        <div className="py-4">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="shadow border rounded w-9/12 py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            placeholder="Enter Your Email"
          />
        </div>
        <button
          className="bg-[#f48c06] hover:bg-[#ffaa00] px-20 py-3 rounded-full text-white text-xl m-1"
          onClick={handleSubscribeClick}
        >
          Subscribe
        </button>
        {message && <p className="text-red-500 text-xl">{message}</p>}
      </div>
    </section>
  );
};

export default Newsletter;
