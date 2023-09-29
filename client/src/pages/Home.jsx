import { useContext } from "react";
import { UserContext } from "../../context/userContext";

const Home = () => {
  const { user } = useContext(UserContext);
  console.log(user && (user.name || user.displayName));
  return (
    <>
      <div>Home</div>
      <div>Hi {user && user.displayName}</div>
    </>
  );
};

export default Home;
