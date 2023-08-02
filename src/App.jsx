import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./index";
import ArticleItem from "./components/Articles/ArticleItem";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import AllArticles from "./components/Articles/AllArticles";
import Submit from "./components/Submit";
import Error from "./components/Error";
import { UserContext } from "./components/Context/UserContext";
import SubmitComment from "./components/Comments/SubmitComment";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <UserContext.Provider value={{ loggedInUser }}>
      <div className="App">
        <Header loggedInUser={loggedInUser} />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="articles/:article_id" element={<ArticleItem loggedInUser={loggedInUser}/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/login"
            element={<Login setLoggedInUser={setLoggedInUser} />}
          />
          <Route path="/articles" element={<AllArticles />} />
          <Route
            path="/post"
            element={<Submit loggedInUser={loggedInUser} />}
          />
          <Route
            path="articles/:article_id/addcomment"
            element={<SubmitComment loggedInUser={loggedInUser} />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
