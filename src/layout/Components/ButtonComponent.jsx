import React from "react";

export const ButtonComponent = ({ children, ...props }) => {
  return (
    <button
      type="submit"
      className="w-full text-primaryColor bg-blueColor  focus:ring-4 focus:outline-none  font-medium rounded-lg  px-5 py-2.5 text-center hover:bg-opacity-90 transition-opacity ease-out text-xl"
      {...props}
    >
      {children}
    </button>
  );
};

ButtonComponent.propTypes = {
  ...React.Component.button,
};
