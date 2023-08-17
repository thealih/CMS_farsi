import { useState } from "react";
import "./productsTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsMoadl from "../DetailsModal/DetailsModal";
const ProductsTable = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const deleteModalCancleAction = () => {
    console.log("مدال بسته شد");
    setIsShowModal(false);
  };
  const deleteModalSubmitAction = () => {
    console.log("مدال تایید شد");
    setIsShowModal(false);
  };
  return (
    <>
      <table className="productsTable">
        <thead>
          <tr className="productsTableHeadingTr">
            <th>عکس</th>
            <th>اسم</th>
            <th>قیمت</th>
            <th>موجودی</th>
          </tr>
        </thead>
        <tbody>
          <tr className="productsTableTr">
            <td>
              <img
                src="/img/oil.jpeg"
                alt="oil picture"
                className="productsTableImg"
              />
            </td>
            <td>روغن سرخ کردنی</td>
            <td>9200 تومان</td>
            <td>82</td>
            <td>
              <button className="productsTableBtn">جزئیات</button>
              <button
                className="productsTableBtn"
                onClick={() => setIsShowModal(!isShowModal)}
              >
                حذف
              </button>
              <button className="productsTableBtn">ویرایش</button>
            </td>
          </tr>
        </tbody>
      </table>
      {isShowModal && (
        <DeleteModal
          submitAction={deleteModalSubmitAction}
          cancelAction={deleteModalCancleAction}
        />
      )}
      <DetailsMoadl />
    </>
  );
};

export default ProductsTable;
