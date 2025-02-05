import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/styles/App.css";
import {
  About,
  Contactus,
  Home,
  HomeLayOut,
  Service,
  GithubUsers,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "contactus",
        element: <Contactus />,
      },
      {
        path: "githubusers",
        element: <GithubUsers />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
