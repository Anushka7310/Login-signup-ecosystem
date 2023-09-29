import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const logout = async () => {
    await axios.get("/auth/logout", {});
    setUser();
    navigate("/login");
  };
  return (
    <>
      <div>Home</div>
      <div>
        Hi {user && (user.displayName || user.username || user.firstname)}
      </div>
      <button onClick={logout}>logout</button>
    </>
  );
};

export default Home;
