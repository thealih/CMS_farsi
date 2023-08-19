/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./editModal.css";
const EditModal = ({ children, onClose, onSubmit }) => {
  useEffect(() => {
    const checkKey = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keydown", checkKey);
    return () => window.removeEventListener("keydown", checkKey);
  });

  return (
    <div className="modalParent active">
      <form action="#" className="editModalForm">
        <h1>اطلاعات جدید را وارد نمایید</h1>
        {children}
        <button className="editFormSubmit" onClick={onSubmit}>
          ثبت اطلاعات جدید
        </button>
        <p className="detailsModalComment">
          ** برای خارج شدن دکمه Esc را فشار دهید **
        </p>
      </form>
    </div>
  );
};

export default EditModal;
