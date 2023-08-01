import email_logo from "../photos/email_logo.png";
import id_logo from "../photos/id_logo.svg";
import { useState } from "react";
import { Modal } from "../modal/Modal";
import { ModalWindow } from "../modal/ModalWindow";

export const Users = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="w-[1520px] h-[675px] border-2 overflow-auto mt-[25px] rounded-xl">
      <div className="text-username flex justify-start mt-[10px] ml-[130px] gap-[695px] font-Commissioner">
        <p className="">ФИО</p>
        <p className="">Email</p>
      </div>
      <div className="flex flex-col justify-center ml-[108px]">
        <div
          onClick={() => setModalActive(true)}
          className="grid grid-cols-2 w-[1304px] h-[60px] shadow-md mb-[15px]"
        >
          <div className="flex ">
            <img
              src={id_logo}
              alt="id"
              className="w-[20px] h-[20px] ml-[20px] mt-[20px] mb-[20px]"
            />
            <span className="ml-[12px] mt-[15px] mb-[20px]">ФИО</span>
          </div>
          <div className="flex font-Commissioner">
            <img
              src={email_logo}
              alt="Email"
              className="w-[20px] h-[20px] "
            />
            <span>Email</span>
          </div>
        </div>
        <div className="grid grid-cols-2 w-[1304px] h-[60px] shadow-md mb-[15px]">
          <div className="flex ">
            <img
              src={id_logo}
              alt="id"
              className="w-[20px] h-[20px]"
            />
            <span>ФИО</span>
          </div>
          <div className="flex font-Commissioner">
            <img
              src={email_logo}
              alt="Email"
              className="w-[20px] h-[20px]"
            />
            <span>Email</span>
          </div>
        </div>
        <div className="grid grid-cols-2 w-[1304px] h-[60px] shadow-md mb-[15px]">
          <div className="flex ">
            <img
              src={id_logo}
              alt="id"
              className="w-[20px] h-[20px]"
            />
            <span>ФИО</span>
          </div>
          <div className="flex font-Commissioner">
            <img
              src={email_logo}
              alt="Email"
              className="w-[20px] h-[20px]"
            />
            <span>Email</span>
          </div>
        </div>
        <div className="grid grid-cols-2 w-[1304px] h-[60px] shadow-md mb-[15px]">
          <div className="flex ">
            <img
              src={id_logo}
              alt="id"
              className="w-[20px] h-[20px]"
            />
            <span>ФИО</span>
          </div>
          <div className="flex font-Commissioner">
            <img
              src={email_logo}
              alt="Email"
              className="w-[20px] h-[20px]"
            />
            <span>Email</span>
          </div>
        </div>
        <div className="grid grid-cols-2 w-[1304px] h-[60px] shadow-md mb-[15px]">
          <div className="flex ">
            <img
              src={id_logo}
              alt="id"
              className="w-[20px] h-[20px]"
            />
            <span>ФИО</span>
          </div>
          <div className="flex font-Commissioner">
            <img
              src={email_logo}
              alt="Email"
              className="w-[20px] h-[20px]"
            />
            <span>Email</span>
          </div>
        </div>
        <div className="grid grid-cols-2 w-[1304px] h-[60px] shadow-md mb-[15px]">
          <div className="flex ">
            <img
              src={id_logo}
              alt="id"
              className="w-[20px] h-[20px]"
            />
            <span>ФИО</span>
          </div>
          <div className="flex font-Commissioner">
            <img
              src={email_logo}
              alt="Email"
              className="w-[20px] h-[20px]"
            />
            <span>Email</span>
          </div>
        </div>
        <div className="grid grid-cols-2 w-[1304px] h-[60px] shadow-md mb-[15px]">
          <div className="flex ">
            <img
              src={id_logo}
              alt="id"
              className="w-[20px] h-[20px]"
            />
            <span>ФИО</span>
          </div>
          <div className="flex font-Commissioner">
            <img
              src={email_logo}
              alt="Email"
              className="w-[20px] h-[20px]"
            />
            <span>Email</span>
          </div>
        </div>
        <div className="grid grid-cols-2 w-[1304px] h-[60px] shadow-md mb-[15px]">
          <div className="flex ">
            <img
              src={id_logo}
              alt="id"
              className="w-[20px] h-[20px]"
            />
            <span>ФИО</span>
          </div>
          <div className="flex font-Commissioner">
            <img
              src={email_logo}
              alt="Email"
              className="w-[20px] h-[20px]"
            />
            <span>Email</span>
          </div>
        </div>
        <div className="grid grid-cols-2 w-[1304px] h-[60px] shadow-md mb-[15px]">
          <div className="flex ">
            <img
              src={id_logo}
              alt="id"
              className="w-[20px] h-[20px]"
            />
            <span>ФИО</span>
          </div>
          <div className="flex font-Commissioner">
            <img
              src={email_logo}
              alt="Email"
              className="w-[20px] h-[20px]"
            />
            <span>Email</span>
          </div>
        </div>
        <div className="grid grid-cols-2 w-[1304px] h-[60px] shadow-md mb-[15px]">
          <div className="flex ">
            <img
              src={id_logo}
              alt="id"
              className="w-[20px] h-[20px]"
            />
            <span>ФИО</span>
          </div>
          <div className="flex font-Commissioner">
            <img
              src={email_logo}
              alt="Email"
              className="w-[20px] h-[20px]"
            />
            <span>Email</span>
          </div>
        </div>
        <div className="grid grid-cols-2 w-[1304px] h-[60px] shadow-md mb-[15px]">
          <div className="flex ">
            <img
              src={id_logo}
              alt="id"
              className="w-[20px] h-[20px]"
            />
            <span>ФИО</span>
          </div>
          <div className="flex font-Commissioner">
            <img
              src={email_logo}
              alt="Email"
              className="w-[20px] h-[20px]"
            />
            <span>Email</span>
          </div>
        </div>
        <Modal open={modalActive} close={setModalActive}>
          <ModalWindow modalActive={setModalActive} />
        </Modal>
      </div>
    </div>
  );
};
