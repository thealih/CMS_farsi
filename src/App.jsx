import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./Component/Header/Header";
import Sidebar from "./Component/Sidebar/Sidebar";
import "./Reset.css";
import Products from "./Component/Products/Products";
import Comments from "./Component/Comments/Comments";
import Users from "./Component/Users/Users";
import Orders from "./Component/Orders/Orders";
import Offs from "./Component/Offs/Offs";

function App() {
  return (
    <>
      <Sidebar />
      <div className="main">
        <Header />
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/users" element={<Users />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/offs" element={<Offs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
