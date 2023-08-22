import ErrorBox from "../ErrorBox/ErrorBox";

const Comments = () => {
  return (
    <div className="cms-main">
      <ErrorBox msg="هیچ کامنتی یافت نشد" />

      <table className="cms-table">
        <tr>
          <th>اسم کاربر</th>
          <th>محصول</th>
          <th>کامنت</th>
          <th>تاریخ</th>
          <th>ساعت</th>
        </tr>

        <tr>
          <td>علی</td>
          <td>آیفون 13</td>
          <td>1401-01-08</td>
          <td>14:12</td>
        </tr>
      </table>
    </div>
  );
};

export default Comments;
