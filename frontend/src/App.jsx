import Home from "./pages/Home";
import Articles from "./pages/Articles";
import ArticlesID from "./pages/ArticleID";
import AddArticles from "./pages/AddArticle";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";

function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/articles",
      element: <Articles />,
    },
    {
      path: "/articles/:id",
      element: <ArticlesID />,
    },
    {
      path: "/articles/add",
      element: <AddArticles />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);
  return <RouterProvider router={Router} />;
}

export default App;
