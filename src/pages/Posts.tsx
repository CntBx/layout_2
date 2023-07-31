const arr = [{ info1: "Информация:" }, { info2: "Информация" }];

let res = arr.map((item) => {
  return (
    <div className="mb-[19px] ">
      <p className="text-posts ml-[22px] ">{item.info1}</p>
      <p className="ml-[22px] ">{item.info2}</p>
    </div>
  );
});

export const Posts = () => {
  return (
    <div className=" w-[1520px] h-[675px] border-2 overflow-auto">
      <div className=" flex flex-col justify-center ml-[108px] mt-[39px] bg-gray-200 w-[1304px] h-[123px]  rounded-md gap-7 ">
        {res}
      </div>
      <div className="flex flex-col justify-center ml-[108px] mt-[15px] bg-gray-200 w-[1304px] h-[123px]  rounded-md gap-7 ">
        {res}
      </div>
      <div className="flex flex-col justify-center ml-[108px] mt-[15px] bg-gray-200 w-[1304px] h-[123px] rounded-md gap-7 mb-5">
        {res}
      </div>
      <div className="flex flex-col justify-center ml-[108px] mt-[15px] bg-gray-200 w-[1304px] h-[123px]  rounded-md gap-7 mb-5">
        {res}
      </div>
      <div className="flex flex-col justify-center ml-[108px] mt-[15px] bg-gray-200 w-[1304px] h-[123px]  rounded-md gap-7 mb-5">
        {res}
      </div>
    </div>
  );
};
