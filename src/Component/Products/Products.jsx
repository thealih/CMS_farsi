import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ErrorBox from "../ErrorBox/ErrorBox";

const Products = () => {
  return (
    <>
      <AddNewProduct />
      <ErrorBox msg="هیچ محصولی یافت نشد" />
    </>
  );
};

export default Products;
