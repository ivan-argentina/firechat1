import { Route, Routes } from "react-router";
import PublicLayout from "./layouts/public.layout.jsx";
import RootLayout from "./layouts/root.Layout.jsx";
import AdminLayout from "./layouts/admin.layout.jsx";
import AuthLayout from "./layouts/auth.layout.jsx";
import HomePage from "./pages/public/homePage.jsx";
import DasboardPage from "./pages/admin/dashboard.page.jsx";
import ProfilePages from "./pages/admin/profile.Pages.jsx";
import ChatPage from "./pages/admin/chatPage.jsx";
import LoginPage from "./pages/auth/login.page.jsx";
import RegisterPage from "./pages/auth/register.page.jsx";
import NotFoundPage from "./pages/public/notFound.page.jsx";

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        {/* public */}
        <Route element={<PublicLayout />}>
          <Route
            index
            element={<HomePage />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Route>
        {/* privates */}
        <Route
          path="admin"
          element={<AdminLayout />}
        >
          <Route
            index
            element={<DasboardPage />}
          />
          <Route
            path="profile"
            element={<ProfilePages />}
          />
          <Route
            path="chat"
            element={<ChatPage />}
          />
        </Route>

        {/* auth */}
        <Route
          path="auth"
          element={<AuthLayout />}
        >
          <Route
            path="login"
            element={<LoginPage />}
          />
          <Route
            path="register"
            element={<RegisterPage />}
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
