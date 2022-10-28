import { useRoutes } from "react-router-dom";
import BatchChat from "../components/BatchChat";
import BatchList from "../components/BatchList";
import Login from "../components/Login";
import RegisterBatch from "../components/RegisterBatch";

const CustomeRoute = () => {
  let route = useRoutes([
    {
      path: "/batchRegister",
      element: <RegisterBatch />,
    },
    {
      path: "/batchList",
      element: <BatchList />,
    },
    {
      path: "/:batchcode",
      element: <BatchChat />,
    },
    {
      path: "/auth/login",
      element: <Login />,
    },
  ]);
  return route;
};
export default CustomeRoute;
