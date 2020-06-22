import React from "react";
import ButtonStyles from "./button.module.scss";

const Button: React.FC<IProps> = ({ children, className, style, icon }) => {
  return (
    <div style={style} className={`${ButtonStyles.button} ${className}`}>
      <div className={ButtonStyles.text}>{children}</div>
      {icon && <div>{icon()}</div>}
    </div>
  );
};

export default Button;

interface IProps {
  className?: string;
  style?: object;
  icon?: () => JSX.Element;
}
