import React from "react";

const Heading: React.FC<IProps> = ({ children, title, center, width }) => {
  return (
    <div
      className={`${center ? "text-center" : ""} ${
        width ? `w-${width}` : "w-100"
      }`}
    >
      <h3 className="heading-2">{title}</h3>
      <p className="paragraph">{children}</p>
    </div>
  );
};

export default Heading;

interface IProps {
  title: string;
  center?: boolean;
  width?: "25" | "50" | "75";
}

enum width {}
