import { lazy } from "react";
const Contacts = lazy(() =>
  import("../Components/Contacts" /* webpackChunkName: "contacts" */)
);
const Login = lazy(() =>
  import("../Components/Login/Login" /* webpackChunkName: "Login" */)
);
const Register = lazy(() =>
  import("../Components/Register/Register" /* webpackChunkName: "Register" */)
);

const routes = [
  {
    path: "/contacts",
    label: "Contacts",
    component: Contacts,
    exact: true,
    restricted: true,
    redirectTo: "/login",
  },
  {
    path: "/login",
    label: "Login",
    component: Login,
    exact: true,
    restricted: true,
    redirectTo: "/contacts",
  },
  {
    path: "/register",
    label: "Register",
    component: Register,
    restricted: true,
    redirectTo: "/contacts",
  },
];
export default routes;
