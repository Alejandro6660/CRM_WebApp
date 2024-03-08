import React from "react";

export const InputComponent = (props) => {
  return (
    <input
      className="rounded-md border-[thin] border-blackColor border-opacity-25 outline-none px-3 py-1  focus:border-blueColor bg-primaryColor bg-opacity-10 transition-colors"
      {...props}
    />
  );
};

InputComponent.propTypes = {
  ...React.Component.propTypes,
};
