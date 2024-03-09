import { useState } from "react";

export const NavComponent = () => {
  const [toggle, setToggle] = useState(true);

  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav
      className={`${
        toggle ? "w-72" : "w-20"
      } duration-500 ease-in-out h-screen bg-blueColorDark text-primaryColor relative`}
    >
      <div
        className="absolute cursor-pointer  top-7 w-7 rounded-full -right-3 border-2 border-blueColorDark text-center bg-primaryColor text-blueColorDark "
        onClick={onToggle}
      >
        <i
          className={`fa-solid fa-angle-right ${
            toggle && "-rotate-180"
          } duration-300 ease-in`}
        ></i>
      </div>
    </nav>
  );
};
