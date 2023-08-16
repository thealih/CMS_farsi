import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ErrorBox from "../ErrorBox/ErrorBox";
import ProductsTable from "../ProductTable/ProductsTable";

const Products = () => {
  return (
    <>
      <AddNewProduct />
      <ErrorBox msg="هیچ محصولی یافت نشد" />
      <ProductsTable />
    </>
  );
};

export default Products;
