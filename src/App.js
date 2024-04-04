import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import WritPage from "./pages/WritPage";
import Header from "./libs/common/Header";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<PostListPage />} />
        <Route path="/register" element={<RegisterPage mode="register" />} />
        <Route path="/login" element={<LoginPage mode="login" />} />
        <Route path="/write" element={<WritPage />} />
        <Route path="/:username/:id" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;
