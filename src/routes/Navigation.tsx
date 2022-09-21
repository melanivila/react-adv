import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import {
  DynamicForm,
  FormikAbstraction,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterFormik,
  RegisterPage,
} from "../03-forms/pages";
import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-basic-page"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Basic Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-yup"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-components"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-abstraction"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Abstraction
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register-formik"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Register Formik
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dynamic-form"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Dynamic Form
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="register" element={<RegisterPage />} />
          <Route path="formik-basic-page" element={<FormikBasicPage />} />
          <Route path="formik-yup" element={<FormikYupPage />} />
          <Route path="formik-components" element={<FormikComponents />} />
          <Route path="formik-abstraction" element={<FormikAbstraction />} />
          <Route path="register-formik" element={<RegisterFormik />} />
          <Route path="dynamic-form" element={<DynamicForm />} />
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
