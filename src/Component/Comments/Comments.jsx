import DeleteModal from "../DeleteModal/DeleteModal";
import ErrorBox from "../ErrorBox/ErrorBox";

const Comments = () => {
  return (
    <>
      <ErrorBox msg="هیچ کامنتی یافت نشد" />
      <DeleteModal />
    </>
  );
};

export default Comments;
