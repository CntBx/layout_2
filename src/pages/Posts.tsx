export function Posts() {

  const arr = [
    { post_name: "Информация:", discription: "Информация" },
    { post_name: "Информация:", discription: "Информация" },
    { post_name: "Информация:", discription: "Информация" },
    { post_name: "Информация:", discription: "Информация" },
    { post_name: "Информация:", discription: "Информация" }
  ]

  return (
    <div className="w-[1520px] h-[675px] border-2 overflow-auto mt-[25px] rounded-xl">
      <div className="mt-[39px]">
        {arr.map((item, index) =>
          <div className="flex flex-col ml-[108px] mt-[15px] bg-posts w-[1304px] h-[123px] rounded-md overflow-hidden ">
            <div key={index} className="mt-[11px] ">
              <p className="text-information ml-[22px] mb-[15px] ">{item.post_name}</p>
              <p className="ml-[22px] mr-[22px] line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, harum. Sapiente dignissimos in provident fugit voluptatem commodi, ipsa blanditiis assumenda quasi amet excepturi nostrum voluptatum molestiae ratione, corrupti hic voluptatibus.

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, harum. Sapiente dignissimos in provident fugit voluptatem commodi, ipsa blanditiis assumenda quasi amet excepturi nostrum voluptatum molestiae ratione, corrupti hic voluptatibus.

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, harum. Sapiente dignissimos in provident fugit voluptatem commodi, ipsa blanditiis assumenda quasi amet excepturi nostrum voluptatum molestiae ratione, corrupti hic voluptatibus.

              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
