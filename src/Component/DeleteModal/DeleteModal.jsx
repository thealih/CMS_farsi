import "./deleteModal.css";
import ReactDOM from "react-dom";
const DeleteModal = () => {
  return ReactDOM.createPortal(
    <div className="modalParent active">
      <div className="deleteModal">
        <h1>آیا از حذف اطمینان دارید ؟</h1>
        <div className="deleteModalBtns">
          <button className="deleteBtn deleteModalAcceptBtn">بله</button>
          <button className="deleteBtn deleteModalRejectBtn">خیر</button>
        </div>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
};

export default DeleteModal;
