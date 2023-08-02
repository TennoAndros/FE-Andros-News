import { useState, useEffect } from "react";
import { getUsers } from "../utils/Api/api";
import Error from "./Error";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoggedInUser }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [error, setError] = useState("");
  const [showAllUsers, setShowAllUsers] = useState(false);

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleLoadMore = () => {
    setShowAllUsers(true);
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    if (selectedUser) {
      setLoggedInUser(selectedUser.username);
      navigate("/");
    }
  };

 

  if (error) return <Error err={error} />;

  const displayedUsers = showAllUsers ? users : users.slice(0, 9);

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow-2xl flex flex-col items-center mt-[4.5rem]">
      <h1 className="text-2xl font-bold mb-4 text-[#f48c06]">Select User</h1>
      <ul>
        {displayedUsers.map((user) => (
          <li
            key={user.username}
            onClick={() => setSelectedUser(user)}
            className={`cursor-pointer mb-2 p-2 rounded shadow-md text-white ${
              selectedUser && selectedUser.username === user.username
                ? "bg-[#f48c06]"
                : "bg-[#48cae4]"
            }`}
          >
            {user.username}
          </li>
        ))}
      </ul>
      {users.length > 9 && !showAllUsers && (
        <button
          onClick={handleLoadMore}
          className="bg-[#48cae4] hover:bg-[#90cdf4] text-white font-bold py-2 px-4 mt-4 rounded"
        >
          Load More
        </button>
      )}
      <button
        onClick={handleLogin}
        className="bg-[#f48c06] hover:bg-[#ffaa00] text-white font-bold py-2 px-4 mt-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!selectedUser}
      >
     
        Log in as: {selectedUser?.username}
      </button>
    </div>
  );
};

export default Login;
