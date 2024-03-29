import { useContext } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

export default function Login() {
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const { data } = await axios.post("/auth/login", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setUser(data);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const googleLogin = () => {
    window.open("http://localhost:8000/auth/google", "_self");
  };

  const githubLogin = () => {
    window.open("http://localhost:8000/auth/github", "_self");
  };

  return (
    <div className="flex flex-row pt-20 justify-between items-center  ">
      <div className="w-1/2 flex flex-col items-center pr-20 border-r-[#AAB2C873] border-r-2">
        <div className="font-[700] text-[32px] text-black mt-5">Welcome!</div>

        <div>Login To Your Account</div>
        <div className="w-full pt-24 ">
          <form onSubmit={loginUser}>
            <div className="mb-5">
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="Email-id"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <input
                required
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div>
              <button className="hover:shadow-form rounded-md bg-[#1F64FF] py-3 px-8 text-base font-semibold text-white outline-none w-full">
                LOGIN
              </button>
            </div>
          </form>
        </div>
        <div className="py-5">OR</div>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center w-full">
          <button
            onClick={googleLogin}
            className="lg:mr-8 w-full flex flex-row border-[#C0C0C0] border-2 rounded-md pz-1 text-[14px] font-[600] justify-center items-center"
          >
            <div>Login With Google</div>
            <div className="ml-2">
              <img src="/images/googleLogo.png" />
            </div>
          </button>
          <button
            onClick={githubLogin}
            className="w-full flex flex-row border-[#C0C0C0] border-2 rounded-md pz-1 text-[14px] font-[600] justify-center items-center"
          >
            <div>Login With Github</div>
            <div className="ml-2">
              <img src="/images/githubLogo.png" />
            </div>
          </button>
        </div>
        <div>
          Don&apos;t have an Account?{" "}
          <Link to={"/register"} className="text-[#1F64FF]">
            Sign Up
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src="/images/bro.png"></img>
        <img
          src="/images/Vector.png"
          className="hidden md:block fixed bottom-0 right-0"
        ></img>
      </div>
    </div>
  );
}
