import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";
import { UserContext } from "../../context/userContext";

export default function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const logout = async () => {
    await axios.get("/auth/logout", {});
    setUser();
    navigate("/login");
  };
  return (
    <nav>
      <Link to="/">Home</Link>
      {!user ? (
        <div>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      ) : (
        <button onClick={logout}>logout</button>
      )}
    </nav>
  );
}
