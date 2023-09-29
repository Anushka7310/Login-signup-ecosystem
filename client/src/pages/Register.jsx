import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data } = await axios.post("/auth/register", {
        name,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Login Successful, Welcome!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    // <div>
    //   <form onSubmit={registerUser}>
    //     <label>Name</label>
    //     <input
    //       type="text"
    //       placeholder="enter name ..."
    //       value={data.name}
    //       onChange={(e) => setData({ ...data, name: e.target.value })}
    //     />
    //     <label>Email</label>
    //     <input
    //       type="email"
    //       placeholder="enter email ..."
    //       value={data.email}
    //       onChange={(e) => setData({ ...data, email: e.target.value })}
    //     />
    //     <label>Password</label>
    //     <input
    //       type="password"
    //       placeholder="enter password ..."
    //       value={data.password}
    //       onChange={(e) => setData({ ...data, password: e.target.value })}
    //     />
    //     <button type="submit">Submit</button>
    //   </form>
    // </div>
    <div className="flex flex-row py-20 justify-between items-center  ">
      <div className="w-1/2 flex flex-col items-center pr-20 border-r-[#AAB2C873] border-r-2">
        <div>
          <img src="/images/xerocode.png" />
        </div>
        <div className="font-[700] text-[32px] text-black mt-5">Hello!</div>

        <div>Create Your Account</div>
        <div className="w-full">
          <form onSubmit={registerUser}>
            <div className="mb-5 w-f">
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="First Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Last Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email-id"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confim Password"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div>
              <button className="hover:shadow-form rounded-md bg-[#1F64FF] py-3 px-8 text-base font-semibold text-white outline-none w-full">
                SIGN UP
              </button>
            </div>
          </form>
        </div>
        <div>OR</div>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center w-full">
          <button className="lg:mr-8 w-full flex flex-row border-[#C0C0C0] border-2 rounded-md pz-1 text-[14px] font-[600] justify-center items-center">
            <div>Sign Up With Google</div>
            <div className="ml-2">
              <img src="/images/googleLogo.png" />
            </div>
          </button>
          <button className="w-full flex flex-row border-[#C0C0C0] border-2 rounded-md pz-1 text-[14px] font-[600] justify-center items-center">
            <div>Sign Up With Github</div>
            <div className="ml-2">
              <img src="/images/githubLogo.png" />
            </div>
          </button>
        </div>
        <div>
          Already have an Account? <Link to={"/login"}>Login</Link>
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
