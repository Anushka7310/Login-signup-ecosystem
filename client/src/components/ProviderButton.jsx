const ProviderButton = ({ name, logo, onClickCallback }) => {
  return (
    <button
      className="w-[220px] xl:w-[260px] mr-3  h-[118px] rounded-[15px] border-[1px] flex flex-row justify-around items-center shadow-md"
      onClick={onClickCallback}
    >
      <div className="">
        <h3 className="text-[22px] font-[700] text-[#242331] letter-[5%] leading-[30.1px]">
          {name}
        </h3>
        <div className="flex top-5 relative">
          <div className="rounded-full bg-red-600 w-3 h-3 mr-1"></div>
          <div className="rounded-full bg-green-600 w-3 h-3 mr-1"></div>
          <img src="/images/sync.png" />
        </div>
      </div>
      <div className="w-[93px] h-[83px] rounded-[15px] border-[1px] flex items-center justify-center">
        <img src={logo} />
      </div>
    </button>
  );
};

export default ProviderButton;
