import "./detailsModal.css";

const DetailsModal = () => {
  return (
    <div className="modalParent active">
      <div className="detailsModal ">
        <table className="cmsTable">
          <tr>
            <th>اسم</th>
            <th>قیمت</th>
            <th>محبوبیت</th>
          </tr>
          <tr>
            <td>لب تاپ</td>
            <td>12.000.000</td>
            <td>91</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default DetailsModal;
