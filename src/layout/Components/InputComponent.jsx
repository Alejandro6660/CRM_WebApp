import React from "react";

export const InputComponent = React.forwardRef(({ errors, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`rounded-md border-[thin] border-blackColor border-opacity-25 outline-none px-3 py-1 focus:border-blueColor ${
        errors
          ? "bg-red-500 focus:border-red-900 border-red-900 border-opacity-[1] border-[1px]"
          : ""
      } bg-primaryColor bg-opacity-10 transition-colors`}
      {...props}
    />
  );
});

InputComponent.displayName = "InputComponent";
// Asigna un nombre de pantalla al componente
