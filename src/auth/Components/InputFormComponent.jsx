import PropTypes from "prop-types";

export const InputFormComponent = ({
  type,
  name,
  id,
  placeholder,
  value,
  change, // Cambiado de change a onChange
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className="rounded-md border-[thin] border-blackColor border-opacity-25 outline-none px-3 py-1  focus:border-blueColor bg-primaryColor bg-opacity-10 transition-colors"
      placeholder={placeholder}
      value={value}
      onChange={change} // Cambiado de change a onChange
    />
  );
};

InputFormComponent.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  change: PropTypes.func.isRequired, // Cambiado de any a func y marcado como requerido
};
