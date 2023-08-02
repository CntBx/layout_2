export function Secret() {

    const arr = ["Информация:", "Информация"]



    return (
        <div>
            {arr.map((item, index, array) => {

                if (array[0].length > 136) array[0].length = 136

                return (
                    <div className="flex flex-col ml-[108px] mt-[15px] bg-posts w-[1304px] h-[123px] rounded-md ">
                        <div className="mt-[11px] overflow-hidden">
                            <p className="text-information ml-[22px] mb-[15px] ">{array[0]}</p>
                            <p className="ml-[22px] mr-[80%] whitespace-pre">{array[1]}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};