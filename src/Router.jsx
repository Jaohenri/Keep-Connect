import { createBrowserRouter } from "react-router";
import Home from "./Home";
import FormPage from "./FormPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/form",
    element: <FormPage/>
  }
]);

export default router;
