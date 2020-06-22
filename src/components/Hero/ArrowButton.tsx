import React from "react";
import Icon from "@mdi/react";
import { mdiArrowLeft, mdiArrowRight } from "@mdi/js";

const ArrowButtonNext: React.FC<IProps> = ({ action }) => {
  return (
    <button
      className="arrow-button"
      style={{ position: "absolute", top: "50%", right: "0" }}
      onClick={action}
    >
      <div>
        <Icon path={mdiArrowRight} size={1} />
      </div>
    </button>
  );
};

const ArrowButtonPrev: React.FC<IProps> = ({ action }) => {
  return (
    <button
      className="arrow-button"
      style={{ position: "absolute", top: "50%", left: "0" }}
      onClick={action}
    >
      <div>
        <Icon path={mdiArrowLeft} size={1} />
      </div>
    </button>
  );
};

export { ArrowButtonNext, ArrowButtonPrev };

interface IProps {
  action: () => void;
}
