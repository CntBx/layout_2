import logo_user from "../photos/logo_user.svg";

export function Home() {
  return (
    <div className="w-[1520px] h-[675px] border-2 overflow-auto mt-[25px] rounded-xl">
      <div className="flex flex-row justify-start ml-[89px] mt-[70px]  mr-[89px]">
        <div className="flex justify-center bg-gray-300 w-[211px] h-[211px] rounded-full">
          <img
            src={logo_user}
            alt="logoUser"
            className="self-center w-[73px] h-[73px]"
          />
        </div>
        <p className="ml-[100px]">Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах:</p>
      </div>
      <p className="ml-[174px] mt-[13px]">фото</p>
    </div>
  )
};
