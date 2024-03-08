import PropTypes from "prop-types";

export const LabelComponent = ({ children, textSize, errors }) => {
  return (
    <label
      className={`text-${textSize} my-1  pl-2 font-light ${
        errors ? "text-red-700" : ""
      }`}
    >
      {children}
    </label>
  );
};

LabelComponent.propTypes = {
  children: PropTypes.string.isRequired,
  textSize: PropTypes.oneOf(["3xl", "2xl", "xl", "lg", "md", "sm"]), // Define los valores válidos para textSize
};

LabelComponent.defaultProps = {
  textSize: "lg", // Establece el valor por defecto para textSize si no se proporciona
};
