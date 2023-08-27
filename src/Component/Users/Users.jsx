import { useEffect, useState } from "react";
import ErrorBox from "../ErrorBox/ErrorBox";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";
import { AiOutlineDollarCircle } from "react-icons/ai";
import "./users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [mainUserId, setMainUserId] = useState(null);

  function getAllUsers() {
    fetch(`http://localhost:3000/api/users`)
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  const closeDeleteModal = () => {
    setIsShowDeleteModal(false);
  };
  const closeEditModal = () => {
    setIsShowEditModal(false);
  };

  const removeUser = () => {
    console.log("کاربر حذف شد");
    setIsShowDeleteModal(false);
    fetch(`http://localhost:3000/api/users/${mainUserId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setIsShowDeleteModal(false);
        getAllUsers();
      });
  };

  const updateUser = (e) => {
    e.preventDefault();
    setIsShowEditModal(false);
  };

  return (
    <div className="cms-main">
      <h1 className="cms-title">لیست کاربران</h1>

      {users.length ? (
        <table className="cms-table">
          <thead>
            <tr>
              <th>نام و نام خانوادگی</th>
              <th>یوزرنیم</th>
              <th>رمزعبور</th>
              <th>شماره تماس</th>
              <th>ایمیل</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  {user.firsname} {user.lastname}
                </td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => {
                      setIsShowDeleteModal(true);
                      setMainUserId(user.id);
                    }}
                  >
                    حذف
                  </button>
                  <button>جزئیات</button>
                  <button
                    onClick={() => {
                      setIsShowEditModal(true);
                      setMainUserId(user.id);
                    }}
                  >
                    ویرایش
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <ErrorBox msg="هیچ کاربری یافت نشد" />
      )}
      {isShowDeleteModal && (
        <DeleteModal
          title="آیا از حذف اطمینان دارید ؟"
          cancelAction={closeDeleteModal}
          submitAction={removeUser}
        />
      )}
      {isShowEditModal && (
        <EditModal onClose={closeEditModal} onSubmit={updateUser}>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد نمایید"
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد نمایید"
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد نمایید"
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد نمایید"
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد نمایید"
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد نمایید"
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد نمایید"
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد نمایید"
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد نمایید"
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد نمایید"
            />
          </div>
        </EditModal>
      )}
    </div>
  );
};

export default Users;
