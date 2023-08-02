import { useState } from "react";
import { Link } from "react-router-dom";
import { postUser } from "../utils/Api/api";
import Error from "./Error";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const newUserObj = {
        username,
        name,
        avatar_url:
          avatarUrl ||
          "https://png.pngtree.com/png-vector/20220630/ourmid/pngtree-unknown-user-question-mark-about-png-image_5322361.png",
      };
      await postUser(newUserObj);
      setSuccessMessage("User created");
    } catch (err) {
      setError(err);
    }
  };

  if (error) return <Error err={error} />;

  return (
    <div className="flex flex-col items-center space-y-4 mt-[4.5rem] bg-white rounded shadow-2xl p-14 mx-auto max-w-[36rem]">
      {successMessage && (
        <div className="bg-white p-14 rounded shadow-2xl">
          <h1 className="text-2xl text-[#0096c7] mb-4 text-center">
            {successMessage}
          </h1>
          <Link to="/login" className="text-[#f48c06] text-center">
            <h1 className="text-2xl">
              <b>
                <u>Log in</u>
              </b>
            </h1>
          </Link>
        </div>
      )}
      {!successMessage && (
        <>
          <h1 className="font-bold text-2xl text-[#f48c06] mb-4">
            Sign Up Here
          </h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            aria-label="Username"
            className="p-2 border-4 border-[#48cae4] rounded outline-none outline-2 focus:border-[#0096c7]"
            style={{ maxWidth: "300px" }}
          />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            aria-label="Name"
            className="p-2 border-4 border-[#48cae4] rounded outline-none focus:outline-2 focus:border-[#0096c7]"
            style={{ maxWidth: "300px" }}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={avatarUrl}
            onChange={(event) => setAvatarUrl(event.target.value)}
            aria-label="Image URL"
            className="p-2 border-4 border-[#48cae4] rounded outline-none focus:outline-2 focus:border-[#0096c7]"
            style={{ maxWidth: "300px" }}
          />
          <button
            onClick={handleSignUp}
            className="bg-[#f48c06] hover:bg-[#ffaa00] text-white font-bold py-2 px-4 rounded-full "
          >
            Sign Up
          </button>
        </>
      )}
    </div>
  );
};

export default SignUp;
