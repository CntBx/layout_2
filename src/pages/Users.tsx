import email_logo from "../photos/email_logo.png";
import id_logo from "../photos/id_logo.svg";
import { useState } from "react";
import { Modal } from "../modal/Modal";
import { ModalWindow } from "../modal/ModalWindow";

export const Users = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <div className="text-posts flex mt-[30px] gap-[695px] ml-[330px] font-Commissioner">
        <p className="">ФИО</p>
        <p className="">Email</p>
      </div>
      <div className="flex flex-col justify-center">
        <div
          onClick={() => setModalActive(true)}
          className="flex gap-[695px] w-[1304px] max-w-[80%] h-[60px] rounded-[10px] shadow-md"
        >
          <div className="relative ml-[52px] mt-[20px] font-Commissioner">
            ФИО
            <img
              src={id_logo}
              alt="id"
              className="absolute w-[20px] h-[20px] bottom-[20px] right-11"
            />
          </div>
          <div className="relative mt-[20px] font-Commissioner">
            Email
            <img
              src={email_logo}
              alt="Email"
              className="absolute w-[20px] h-[20px] bottom-[20px] right-12"
            />
          </div>
        </div>
        <div className="flex  gap-[695px] w-[1304px] max-w-[80%] h-[60px] rounded-[10px] shadow-md">
          <div className="relative ml-[52px] mt-[20px] font-Commissioner">
            ФИО
            <img
              src={id_logo}
              alt="id"
              className="absolute w-[20px] h-[20px] bottom-[20px] right-11"
            />
          </div>
          <div className="relative mt-[20px] font-Commissioner">
            Email
            <img
              src={email_logo}
              alt="Email"
              className="absolute w-[20px] h-[20px] bottom-[20px] right-12"
            />
          </div>
        </div>
        <div className="flex  gap-[695px]  w-[1304px] max-w-[80%] h-[60px]   rounded-[10px] shadow-md">
          <div className="relative ml-[52px] mt-[20px] font-Commissioner">
            ФИО
            <img
              src={id_logo}
              alt="id"
              className="absolute w-[20px] h-[20px] bottom-[20px] right-11"
            />
          </div>
          <div className="relative mt-[20px] font-Commissioner">
            Email
            <img
              src={email_logo}
              alt="Email"
              className="absolute w-[20px] h-[20px] bottom-[20px] right-12"
            />
          </div>
        </div>
        <div className="flex  gap-[695px] w-[1304px] max-w-[80%] h-[60px]   rounded-[10px] shadow-md">
          <div className="relative ml-[52px] mt-[20px] font-Commissioner">
            ФИО
            <img
              src={id_logo}
              alt="id"
              className="absolute w-[20px] h-[20px] bottom-[20px] right-11"
            />
          </div>
          <div className="relative mt-[20px] font-Commissioner">
            Email
            <img
              src={email_logo}
              alt="Email"
              className="absolute w-[20px] h-[20px] bottom-[20px] right-12"
            />
          </div>
        </div>
        <div className="flex  gap-[695px]  w-[1304px] max-w-[80%] h-[60px]   rounded-[10px] shadow-md">
          <div className="relative ml-[52px] mt-[20px] font-Commissioner">
            ФИО
            <img
              src={id_logo}
              alt="id"
              className="absolute w-[20px] h-[20px] bottom-[20px] right-11"
            />
          </div>
          <div className="relative mt-[20px] font-Commissioner">
            Email
            <img
              src={email_logo}
              alt="Email"
              className="absolute w-[20px] h-[20px] bottom-[20px] right-12"
            />
          </div>
        </div>
        <div className="flex gap-[695px] w-[1304px] max-w-[80%] h-[60px]  rounded-[10px] shadow-md">
          <div className="relative ml-[52px] mt-[20px] font-Commissioner">
            ФИО
            <img
              src={id_logo}
              alt="id"
              className="absolute w-[20px] h-[20px] bottom-[20px] right-11"
            />
          </div>
          <div className="relative mt-[20px] font-Commissioner">
            Email
            <img
              src={email_logo}
              alt="Email"
              className="absolute w-[20px] h-[20px] bottom-[20px] right-12"
            />
          </div>
        </div>
        <div className="flex gap-[695px] w-[1304px] max-w-[80%] h-[60px]  rounded-[10px] shadow-md">
          <div className="relative ml-[52px] mt-[20px] font-Commissioner">
            ФИО
            <img
              src={id_logo}
              alt="id"
              className="absolute w-[20px] h-[20px] bottom-[20px] right-11"
            />
          </div>
          <div className="relative mt-[20px] font-Commissioner">
            Email
            <img
              src={email_logo}
              alt="Email"
              className="absolute w-[20px] h-[20px] bottom-[20px] right-12"
            />
          </div>
        </div>
        <div className="flex gap-[695px] w-[1304px] max-w-[80%] h-[60px] rounded-[10px] shadow-md">
          <div className="relative ml-[52px] mt-[20px] font-Commissioner">
            ФИО
            <img
              src={id_logo}
              alt="id"
              className="absolute w-[20px] h-[20px] bottom-[20px] right-11"
            />
          </div>
          <div className="relative mt-[20px] font-Commissioner">
            Email
            <img
              src={email_logo}
              alt="Email"
              className="absolute w-[20px] h-[20px] bottom-[20px] right-12"
            />
          </div>
        </div>
        <div className="flex  gap-[695px] w-[1304px] max-w-[80%] h-[33px]  rounded-[10px] shadow-md"></div>
        <Modal open={modalActive} close={setModalActive}>
          <ModalWindow />
        </Modal>
      </div>
    </>
  );
};
