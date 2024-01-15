import AdminSideBar from "./AdminSideBar";
import AdminHeader from "./AdminHeader";
import { useState } from 'react';
import AdminHome from "./AdminHome";

const App =()=> {
    const [openAdminSideBarToggle, setOpenAdminSideBarToggle] = useState(false)
  
    const OpenAdminSideBar = () => {
      setOpenAdminSideBarToggle(!openAdminSideBarToggle)
    }
  
    return (
       
      <div className="grid-container">
        <AdminHeader OpenAdminSideBar={OpenAdminSideBar}/>
        <AdminSideBar openAdminSideBarToggle={openAdminSideBarToggle} OpenAdminSideBar={OpenAdminSideBar}/>
        <AdminHome />
      </div>
    );
}

export default App;