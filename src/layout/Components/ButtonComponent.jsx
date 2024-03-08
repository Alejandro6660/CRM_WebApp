import PropTypes from "prop-types";

export const ButtonComponent = ({ name }) => {
  return (
    <button
      type="submit"
      className="w-full text-primaryColor bg-blueColor  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-opacity-90 transition-opacity ease-out"
    >
      {name}
    </button>
  );
};

ButtonComponent.propTypes = {
  name: PropTypes.string.isRequired,
};
