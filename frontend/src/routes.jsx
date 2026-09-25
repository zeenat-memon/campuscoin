import { Routes, Route } from "react-router-dom";

// Public Pages
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";

// Auth Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";

// Layouts
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageUsers from "./pages/admin/ManageUsers";
import ManageTransactions from "./pages/admin/ManageTransactions";
import Reports from "./pages/admin/Reports";
import AdminSettings from "./pages/admin/AdminSettings";

function RoutesConfig() {
  return (
    <Routes>

      {/* =========================
          PUBLIC WEBSITE
      ========================== */}

      <Route element={<MainLayout />}>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Route>


      {/* =========================
          AUTHENTICATION
      ========================== */}

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      <Route
        path="/reset-password"
        element={<ResetPassword />}
      />


      {/* =========================
          ADMIN PANEL
      ========================== */}

      <Route element={<AdminLayout />}>

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        <Route
          path="/admin/users"
          element={<ManageUsers />}
        />

        <Route
          path="/admin/transactions"
          element={<ManageTransactions />}
        />

        <Route
          path="/admin/reports"
          element={<Reports />}
        />

        <Route
          path="/admin/settings"
          element={<AdminSettings />}
        />

      </Route>

    </Routes>
  );
}

export default RoutesConfig;