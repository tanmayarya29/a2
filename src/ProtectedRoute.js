import { useNavigate, Outlet } from "react-router-dom";

export const ProtectedRoute = (props) => {
  const { loggedIn } = props;
  const navigate = useNavigate();

  if (loggedIn) return <Outlet />;
  navigate("/login");
  return;
};
