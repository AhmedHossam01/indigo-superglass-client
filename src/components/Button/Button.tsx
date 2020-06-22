import React from "react";
import ButtonStyles from "./button.module.scss";
import Icon from "@mdi/react";

const Button: React.FC<IProps> = ({ children, className, style, path }) => {
  return (
    <div style={style} className={`${ButtonStyles.button} ${className}`}>
      <div className={ButtonStyles.text}>{children}</div>
      {path && (
        <div className="ml-3">
          <Icon path={path} size={0.9} color="white" />
        </div>
      )}
    </div>
  );
};

export default Button;

interface IProps {
  className?: string;
  style?: object;
  path?: any;
}

const IconButton: React.FC<IconButtonProps> = ({
  className,
  style,
  path,
  color,
  background,
}) => {
  return (
    <div
      style={{ ...style, backgroundColor: background }}
      className={`${ButtonStyles.buttonIcon} ${className}`}
    >
      <Icon path={path} size={0.9} color={color} />
    </div>
  );
};

export { IconButton };

interface IconButtonProps extends IProps {
  color?: string;
  background?: string;
}
