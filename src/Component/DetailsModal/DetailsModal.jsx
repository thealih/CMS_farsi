/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./detailsModal.css";

const DetailsModal = ({ onHide }) => {
  useEffect(() => {
    const checkKey = (event) => {
      if (event.keyCode === 27) {
        onHide();
      }
    };
    window.addEventListener("keydown", checkKey);
    return () => window.removeEventListener("keydown", checkKey);
  });
  return (
    <div className="modalParent active">
      <div className="detailsModal ">
        <table className="cmsTable">
          <thead>
            <tr>
              <th>اسم</th>
              <th>قیمت</th>
              <th>محبوبیت</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>لب تاپ</td>
              <td>12.000.000</td>
              <td>91</td>
            </tr>
          </tbody>
        </table>
        <p className="detailsModalComment">
          ** برای خارج شدن دکمه Esc را فشار دهید **
        </p>
      </div>
    </div>
  );
};

export default DetailsModal;
