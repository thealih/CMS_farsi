import "./productsTable.css";
const ProductsTable = () => {
  return (
    <table className="productsTable">
      <tr className="productsTableHeadingTr">
        <th>عکس</th>
        <th>اسم</th>
        <th>قیمت</th>
        <th>موجودی</th>
      </tr>
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
          <button className="productsTableBtn">حذف</button>
          <button className="productsTableBtn">ویرایش</button>
        </td>
      </tr>
    </table>
  );
};

export default ProductsTable;
