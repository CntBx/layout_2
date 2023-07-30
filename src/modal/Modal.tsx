import { useEffect } from "react";

interface IModalNewProps {
  open: any;
  close: any;
  children: React.ReactNode;
}

export function Modal({ open, close, children }: IModalNewProps) {
  function escHandler({ key }: any) {
    if (key === "Escape") {
      close(false);
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", escHandler);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("keydown", escHandler);
      }
    };
  });

  return (
    <div className={`${open ? "" : "pointer-events-none"}`}>
      {/* backdrop */}
      <div
        className={`fixed inset-0 bg-black ${
          open ? "opacity-50" : "pointer-events-none opacity-0"
        } transition-opacity duration-300 ease-in-out z-10`}
        onClick={() => close(false)}
      />

      {/* content */}
      <div
        className={`rounded-lg p-5 z-50 absolute bg-white top-10 left-1/2 -translate-x-1/2 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        } transition-opacity duration-300 ease-in-out`}
      >
        {children}
      </div>
    </div>
  );
}
