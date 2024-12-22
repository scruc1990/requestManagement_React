import PropTypes from "prop-types";

const LoginHeader = ({ title, description }) => {
  return (
    <div className="pb-6 flex flex-col items-center">
      <h1 className="text-lg font-bold">{title}</h1>
      <p>{description}</p>
    </div>
  );
}

LoginHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default LoginHeader;