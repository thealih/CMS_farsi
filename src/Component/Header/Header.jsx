import "./heder.css";
import { AiOutlineBell } from "react-icons/ai";
import { BsBrightnessLow } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header">
      <div className="adminProfile">
        <img src="../../../public/img/saeedi.jpeg" alt="Admin Profile" />
        <div>
          <h1>محمد امین سعیدی راد</h1>
          <h3>برنامه نویس فرانت اند</h3>
        </div>
      </div>
      <div className="headerLeftSection">
        <div className="searchBox">
          <input type="text" placeholder="جست و جو بکنید ..." />
          <button>جست و جو</button>
        </div>
        <button className="headerLeftIcons">
          <AiOutlineBell />
        </button>
        <button className="headerLeftIcons">
          <BsBrightnessLow />
        </button>
      </div>
    </div>
  );
};

export default Header;
