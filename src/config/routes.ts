import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Demos from "../pages/Demos";

interface RouteType {
  path: string,
  component: () => JSX.Element,
  name: string
}

const routes: RouteType[] = [
    {
      path:"",
      component: Home,
      name: "Home Screen",
    },
    {
      path: "/about",
      component: About,
      name: "About",
    },
    {
      path: "/contact",
      component: Contact,
      name: "Contact",
    },
    {
      path: "/demos",
      component: Demos,
      name: "Demos",
    }
  ]

  export default routes;