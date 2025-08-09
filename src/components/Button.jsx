import PropTypes from "prop-types";

function Button(props) {
  return <button {...props}>{props.children}</button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
