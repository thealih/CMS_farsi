import { useEffect, useState } from "react";
import ErrorBox from "../ErrorBox/ErrorBox";
import DetailsModal from "../DetailsModal/DetailsModal";
import "./comments.css";

const Comments = () => {
  const [allComments, setAllComments] = useState([]);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [mainCommentBody, setMainCommentBody] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/comments")
      .then((res) => res.json())
      .then((comments) => setAllComments(comments));
  }, []);

  const closeDetailsModal = () => {
    setIsShowDetailsModal(false);
  };
  return (
    <div className="cms-main">
      {allComments.length ? (
        <table className="cms-table">
          <thead>
            <tr>
              <th>اسم کاربر</th>
              <th>محصول</th>
              <th>کامنت</th>
              <th>تاریخ</th>
              <th>ساعت</th>
            </tr>
          </thead>
          <tbody>
            {allComments.map((comment) => (
              <tr key={comment.id}>
                <td>{comment.userID}</td>
                <td>{comment.productID}</td>
                <td>
                  <button
                    onClick={() => {
                      setMainCommentBody(comment.body);
                      setIsShowDetailsModal(true);
                    }}
                  >
                    دیدن متن
                  </button>
                </td>
                <td>{comment.date}</td>
                <td>{comment.hour}</td>
                <td>
                  <button>حذف</button>
                  <button>ویرایش</button>
                  <button>پاسخ</button>
                  <button>تایید</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <ErrorBox msg="هیچ کامنتی یافت نشد" />
      )}

      {isShowDetailsModal && (
        <DetailsModal onHide={closeDetailsModal}>
          <div>
            <p className="text-modal">{mainCommentBody}</p>

            <button
              className="text-modal-close-btn"
              onClick={closeDetailsModal}
            >
              بستن
            </button>
          </div>
        </DetailsModal>
      )}
    </div>
  );
};

export default Comments;
