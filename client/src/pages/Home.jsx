import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProviderButton from "../components/ProviderButton";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import StatusCard from "../components/StatusCard";

const stepsOptions = [
  {
    title: "Connect to Cloud",
    options: [
      {
        name: "AWS",
        logo: "/images/aws.png",
      },
      {
        name: "GCP",
        logo: "/images/gcp.png",
      },
    ],
  },
  {
    title: "Connect to Source Code",
    options: [
      {
        name: "Github",
        logo: "/images/github.png",
      },
      {
        name: "Gitlab",
        logo: "/images/gitlab.png",
      },
      {
        name: "Bitbucket",
        logo: "/images/bitbucket.png",
      },
    ],
  },
  {
    title: "Connect to DataSource",
    options: [
      {
        name: "MongoDB",
        logo: "/images/mongodb.png",
      },
      {
        name: "RedisDB",
        logo: "/images/redis.png",
      },
      {
        name: "Postgressql",
        logo: "/images/postgres.png",
      },
    ],
  },
];

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const logout = async () => {
    await axios.get("/auth/logout", {});
    setUser();
    navigate("/login");
  };

  // State to keep track of selected options for each step
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const stepCompleted = selectedOptions.length;
    if (stepCompleted === 1) {
      setProgress(40);
    } else if (stepCompleted === 2) {
      setProgress(80);
    } else if (stepCompleted >= 3) {
      setProgress(100);
    }
  }, [selectedOptions]);

  // Function to handle option selection
  const handleOptionSelect = (stepIndex, option) => {
    setSelectedOptions((prevSelectedOptions) => {
      const updatedOptions = [...prevSelectedOptions];
      updatedOptions[stepIndex] = option;
      return updatedOptions;
    });
  };

  return (
    <div className="flex flex-col">
      <button onClick={logout}>Logout</button>
      <div className=" flex justify-start flex-col items-start w-full rounded-[25px] border-[1px] p-8">
        <h3 className="text-[55px] lg:text-[75px] font-[800] text-[#242331]">
          Hi{" "}
          {user &&
            (user.displayName || user.username || user.firstname).split(" ")[0]}
          !
        </h3>
      </div>
      <div className=" flex flex-row justify-between">
        {/* Steps */}
        <div className="flex flex-col w-3/4 items-start mt-10">
          {stepsOptions.map((stepOptions, index) => (
            <div
              className="flex justify-start flex-col items-start p-5"
              key={index}
            >
              <h4 className="text-[18px] font-[700] text-[#000] letter-[5%] leading-[24.55px]">
                Step {index + 1}
              </h4>
              <p className="text-[15px] font-[700] text-[#797979] letter-[5%] leading-[19.1px]">
                {stepOptions.title}
              </p>
              <div className="flex flex-wrap mt-5 ">
                {stepOptions.options.map((option, optionIndex) => (
                  <ProviderButton
                    name={option.name}
                    logo={option.logo}
                    key={`option_${optionIndex}`}
                    onClickCallback={() => handleOptionSelect(index, option)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Progress side */}
        <div className="mt-5 w-[354px] min-h-[708px] rounded-[15px] border-[1px] shadow-lg">
          <h4 className="text-[22px] font-[700] text-[#000] letter-[5%] leading-[30.01px] mt-5">
            Your Progress
          </h4>

          <div className="w-1/2 mt-10 ml-20">
            <CircularProgressbar
              value={progress}
              text={`${progress}%`}
              strokeWidth={18}
              styles={buildStyles({
                strokeLinecap: "butt",
                textSize: "22px",
                pathTransitionDuration: 0.5,
                pathColor: `#0D64DE`,
                textColor: "#000000",
                trailColor: "#C7CEFF",
              })}
            />
          </div>
          <button className="mt-5 bg-[#FBFCFE] w-[109px] h-[32px] rounded-[50px] border-[0.5px] shadow-lg text-[12px] font-[700] text-[#818181] leading-[20px]">
            View Details
          </button>
          {/* Steps */}
          <div className="flex flex-col items-start p-4">
            {selectedOptions.map(
              (selectedOption, index) =>
                selectedOption && (
                  <div
                    className="text-[14px] font-[700] text-[#79797980] leading-[19.1px] flex items-start flex-col w-full mt-3"
                    key={index}
                  >
                    Step {index + 1}
                    <StatusCard
                      name={selectedOption?.name}
                      status="Complete"
                      logo={selectedOption?.logo}
                    />
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
