export function ModalWindow() {
  return (
    <div>
      <div className=" w-[488px]">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-personal_card ml-[34px] pt-[10px] font-Commissioner">
              ЛИЧНАЯ КАРТОЧКА
            </h1>
          </div>
          <div>
            <button
              type="button"
              className=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[15px] ml-[32px] mt-[44px]">
        <p>ФИО</p>
        <p>Email</p>
        <p>Адрес</p>
      </div>
      <button className="block m-auto bg-button w-[220px] h-[30px] mt-[262px] text-white rounded-[4px]">
        Сохранить
      </button>
    </div>
  );
}
