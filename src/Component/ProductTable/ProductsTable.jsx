import { useState } from "react";
import "./productsTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
import { AiOutlineDollarCircle } from "react-icons/ai";
const ProductsTable = () => {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const deleteModalCancleAction = () => {
    console.log("مدال بسته شد");
    setIsShowDeleteModal(false);
  };
  const deleteModalSubmitAction = () => {
    console.log("مدال تایید شد");
    setIsShowDeleteModal(false);
  };
  const closeDetailsModal = () => {
    setIsShowDetailsModal(false);
  };
  const updateProductInfos = (e) => {
    console.log("محصول ویرایش شد");
    e.preventDefault();
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
              <button
                className="productsTableBtn"
                onClick={() => {
                  setIsShowDetailsModal(!isShowDetailsModal);
                }}
              >
                جزئیات
              </button>
              <button
                className="productsTableBtn"
                onClick={() => setIsShowDeleteModal(!isShowDeleteModal)}
              >
                حذف
              </button>
              <button
                className="productsTableBtn"
                onClick={() => setIsShowEditModal(!isShowEditModal)}
              >
                ویرایش
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {isShowDeleteModal && (
        <DeleteModal
          submitAction={deleteModalSubmitAction}
          cancelAction={deleteModalCancleAction}
        />
      )}
      {isShowDetailsModal && <DetailsModal onHide={closeDetailsModal} />}

      {isShowEditModal && (
        <EditModal
          onClose={() => setIsShowEditModal(false)}
          onSubmit={updateProductInfos}
        >
          <div className="editProductsFormGroup">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="editProductInput"
            />
          </div>
          <div className="editProductsFormGroup">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="editProductInput"
            />
          </div>
          <div className="editProductsFormGroup">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="editProductInput"
            />
          </div>
          <div className="editProductsFormGroup">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="editProductInput"
            />
          </div>
        </EditModal>
      )}
    </>
  );
};

export default ProductsTable;
