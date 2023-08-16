import "./errorBox.css";
// eslint-disable-next-line react/prop-types
const ErrorBox = ({ msg }) => {
  return (
    <div className="cmsEmptyError">
      <h1>{msg}</h1>
    </div>
  );
};

export default ErrorBox;
