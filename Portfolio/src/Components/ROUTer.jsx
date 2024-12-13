import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";
import Header from "./Header";
import Sidebar from "./Sidebar";
import About from "./About";
import Contact from "./Contact";
export default function ROUTer() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/Header",
      element: <Header />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);
  return <RouterProvider router={router} />;
}
