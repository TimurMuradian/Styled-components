import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  color: #fafafa;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 50px;

  background-color: ${(props) => {
    if (props.color === "primary") {
      return "#605DEC";
    } else if (props.color === "secondary") {
      return "#EB5757";
    }
  }};
  :hover {
    background-color: ${(props) => {
      if (props.color === "primary") {
        return "#1513A0";
      } else if (props.color === "secondary") {
        return "#E9E8FC";
      }
    }};
  }
  width: ${(props) => {
    if (props.size === "small") {
      return "68px";
    } else if (props.size === "normal") {
      return "76px";
    } else if (props.size === "big") {
      return "81px";
    }
  }};
  height: ${(props) => {
    if (props.size === "small") {
      return "40px";
    } else if (props.size === "normal") {
      return "48px";
    } else if (props.size === "big") {
      return "48px";
    }
  }};
`;

const Button = ({ onClick, color, children, disabled, size }) => {
  return (
    <StyledButton
      onClick={onClick}
      size={size}
      disabled={disabled}
      color={color}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["small", "normal", "big"]).isRequired,
};

export default Button;
