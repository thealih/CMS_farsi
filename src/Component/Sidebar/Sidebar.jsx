import "./sidebar.css";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { BsBagCheck, BsCurrencyDollar } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد خود خوش آمدید</h1>
      <ul className="sidebar-links">
        <li className="active">
          <Link to="products">
            <AiOutlineHome className="icon" />
            صفحه اصلی
          </Link>
        </li>
        <li>
          <Link to="products">
            <MdProductionQuantityLimits className="icon" />
            محصولات
          </Link>
        </li>
        <li>
          <Link to="comments">
            <BiCommentDetail className="icon" />
            کامنت ها
          </Link>
        </li>
        <li>
          <Link to="users">
            <FiUsers className="icon" />
            کاربران
          </Link>
        </li>
        <li>
          <Link to="orders">
            <BsBagCheck className="icon" />
            سفارشات
          </Link>
        </li>
        <li>
          <Link to="offs">
            <BsCurrencyDollar className="icon" /> تخفیفات
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
