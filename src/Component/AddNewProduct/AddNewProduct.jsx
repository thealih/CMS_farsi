import "./addNewProduct.css";
const AddNewProduct = () => {
  return (
    <div className="productsMain">
      <h1 className="productsTitle">افزودن محصول جدید</h1>
      <form action="#" className="addProductsForm">
        <div className="addProductFormWrap">
          <div className="addProductsFormGroup">
            <input
              type="text"
              placeholder="اسم محصول را بنویسید"
              className="addProductsInput"
            />
          </div>
          <div className="addProductsFormGroup">
            <input
              type="text"
              placeholder="قیمت محصول را بنویسید"
              className="addProductsInput"
            />
          </div>
          <div className="addProductsFormGroup">
            <input
              type="text"
              placeholder="موجودی محصول را بنویسید"
              className="addProductsInput"
            />
          </div>
          <div className="addProductsFormGroup">
            <input
              type="text"
              placeholder="آدرس عکس محصول را بنویسید"
              className="addProductsInput"
            />
          </div>
          <div className="addProductsFormGroup">
            <input
              type="text"
              placeholder="میزان محبوبیت محصول را بنویسید"
              className="addProductsInput"
            />
          </div>
          <div className="addProductsFormGroup">
            <input
              type="text"
              placeholder="میزان فروش محصول را بنویسید"
              className="addProductsInput"
            />
          </div>
          <div className="addProductsFormGroup">
            <input
              type="text"
              placeholder="تعداد رنگ بندی محصول را بنویسید"
              className="addProductsInput"
            />
          </div>
        </div>
        <button type="submit" className="addProductsSubmit">
          ثبت محصول
        </button>
      </form>
    </div>
  );
};

export default AddNewProduct;
