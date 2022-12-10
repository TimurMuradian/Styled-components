import styled from "styled-components";
import PropTypes from "prop-types";

const AlertStyled = styled.div`
  background-color: ${(prop) => {
    if (prop.color === "primary") {
      return "#605DEC";
    } else if (prop.color === "error") {
      return "#EB5757";
    } else if (prop.color === "warning") {
      return "#FFD12F";
    }
  }};
  color: #fff;
  position: relative;
  width: 411px;
  height: 56px;
  text-align: center;
  padding: 15px;
  box-sizing: border-box;
  margin: 0 auto;
  border-radius: 4px;
`;

const StyledCloseBtn = styled.span`
  position: relative;
  cursor: pointer;
  position: absolute;
  text-align: center;
  top: 20px;
  right: 20px;
  padding: 10px;
  :before,
  :after {
    content: "";
    position: absolute;
    width: 20px;
    height: 2px;
    background: #fff;
    top: 9px;
    right:0;
  }
  :before { 
    transform: rotate(45deg);
  }
  :after {
    transform: rotate(-45deg);
  }
`;

const Alert = ({ color, children, onClose }) => {
  return (
    <AlertStyled color={color}>
      {children}
      <StyledCloseBtn onClick={onClose}></StyledCloseBtn>
    </AlertStyled>
  );
};

Alert.propTypes = {
  color: PropTypes.oneOf(["primary", "error", "warning"]).isRequired,
  onClose: PropTypes.func.isRequired
};

export default Alert;
