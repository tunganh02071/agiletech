// libararys
import { Navigate, Route, Routes } from "react-router-dom";

// types
import { RoutePath } from "src/types";

// components
import HomePage from "src/pages/HomePage/HomePage";
import PageLayout from "./components/layouts/PageLayout/PageLayout";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
// styles
import "./global.scss";
import useAuth from "./hooks/useAuth";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CreatePostPage from "./pages/CreateTaskPage/CreateTaskPage";
import EditPostPage from "./pages/EditTaskPage/EditTaskPage";
import Profile from "./pages/Profile/Profile";

function App() {
  const publicPages = [
    {
      path: `${RoutePath.Home}`,
      element: <HomePage />,
    },

    {
      path: "*",
      element: <NotFoundPage />,
    },
    {
      path: `${RoutePath.Register}`,
      element: <RegisterPage />,
    },
  ];

  const authPages = [
    {
      path: `${RoutePath.Login}`,
      element: <LoginPage />,
    },
  ];

  const protectedPages = [
    {
      path: `${RoutePath.Post}`,
      element: <Profile />,
    },
    {
      path: `${RoutePath.CreateTask}`,
      element: <CreatePostPage />,
    },
    {
      path: `${RoutePath.EditTask}`,
      element: <EditPostPage />,
    },
  ];
  const { isLoggedIn } = useAuth();

  return (
    <Routes>
      {publicPages.map((publicPage) => (
        <Route
          key={publicPage.path}
          path={publicPage.path}
          element={<PageLayout>{publicPage.element}</PageLayout>}
        />
      ))}
      {authPages.map((authPage) => (
        <Route
          key={authPage.path}
          path={authPage.path}
          element={
            isLoggedIn ? <Navigate to={RoutePath.Home} /> : authPage.element
          }
        />
      ))}
      {protectedPages.map((protectedPage) => (
        <Route
          key={protectedPage.path}
          path={protectedPage.path}
          element={
            isLoggedIn ? (
              protectedPage.element
            ) : (
              <Navigate to={RoutePath.Login} />
            )
          }
        />
      ))}
    </Routes>
  );
}

export default App;
