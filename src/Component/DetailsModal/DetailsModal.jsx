/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./detailsModal.css";

const DetailsModal = ({ onHide, children }) => {
  useEffect(() => {
    const checkKey = (event) => {
      if (event.keyCode === 27) {
        onHide();
      }
    };
    window.addEventListener("keydown", checkKey);
    return () => window.removeEventListener("keydown", checkKey);
  });
  return <div className="modalParent active">{children}</div>;
};

export default DetailsModal;
