import { BrowserRouter, Routes, Route, Link } from "react-router";
import HeaderRoutes from "./apiCalls/headerRoutes";
import UserDataApi from "./apiCalls/UserDataApi";
import AddUser from "./apiCalls/AddUser";
import { NavLink } from "react-router";
import EditUser from "./apiCalls/EditUser";

function App() {
  return (
   <>
     
      
<HeaderRoutes/>
      <Routes>
        <Route path="/" element={<UserDataApi />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>

</>
  );
}

export default App;