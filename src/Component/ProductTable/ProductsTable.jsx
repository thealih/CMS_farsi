import { useEffect, useState } from "react";
import "./productsTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
import { AiOutlineDollarCircle } from "react-icons/ai";
import ErrorBox from "../ErrorBox/ErrorBox";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const ProductsTable = () => {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [productId, setProductId] = useState(null);
  const [mainProductInfos, setMainProductInfos] = useState({});
  // const notify = () => {
  //   toast.warning("Success Notification !", {
  //     position: toast.POSITION.TOP_RIGHT,
  //   });
  // };

  const url = "http://localhost:3000/api/products/";
  const deleteModalCancleAction = () => {
    console.log("مدال بسته شد");
    setIsShowDeleteModal(false);
  };
  const deleteModalSubmitAction = () => {
    console.log("مدال تایید شد");
    fetch(`${url}/${productId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      // eslint-disable-next-line no-unused-vars
      .then((_result) => {
        setIsShowDeleteModal(false);
        getAllProduct();
      });
  };
  const closeDetailsModal = () => {
    setIsShowDetailsModal(false);
  };
  const updateProductInfos = (e) => {
    console.log("محصول ویرایش شد");
    e.preventDefault();
  };

  const getAllProduct = () => {
    fetch(url)
      .then((res) => res.json())
      .then((products) => setAllProducts(products));
  };

  useEffect(() => {
    getAllProduct();
  }, []);
  return allProducts.length ? (
    <>
      {/* <ToastContainer /> */}
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
          {allProducts.map((product) => (
            <tr key={product.id} className="productsTableTr">
              <td>
                <img
                  src={product.img}
                  alt="oil picture"
                  className="productsTableImg"
                />
              </td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.count}</td>
              <td>
                <button
                  className="productsTableBtn"
                  onClick={() => {
                    setIsShowDetailsModal(!isShowDetailsModal);
                    setMainProductInfos(product);
                  }}
                >
                  جزئیات
                </button>
                <button
                  className="productsTableBtn"
                  onClick={() => {
                    setIsShowDeleteModal(!isShowDeleteModal);
                    setProductId(product.id);
                  }}
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
          ))}
        </tbody>
      </table>

      {isShowDeleteModal && (
        <DeleteModal
          submitAction={deleteModalSubmitAction}
          cancelAction={deleteModalCancleAction}
        />
      )}
      {isShowDetailsModal && (
        <DetailsModal onHide={closeDetailsModal}>
          <div className="detailsModal ">
            <table className="cmsTable">
              <thead>
                <tr>
                  <th>محبوبیت</th>
                  <th>فروش</th>
                  <th>رنگ بندی</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{mainProductInfos.popularity}</td>
                  <td>{mainProductInfos.sale}</td>
                  <td>{mainProductInfos.colors}</td>
                </tr>
              </tbody>
            </table>
            <p className="detailsModalComment">
              ** برای خارج شدن دکمه Esc را فشار دهید **
            </p>
          </div>
        </DetailsModal>
      )}

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
  ) : (
    <ErrorBox msg="هیچ محصولی یافت نشد" />
  );
};

export default ProductsTable;
